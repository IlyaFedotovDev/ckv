import { IWorkerContext } from './interfaces/IWorkerContext';
import { CPUFilter } from '../filters/cpu/CPUFilter';
import { CPUFilters } from '../filters/cpu/CPUFilters';
import { checkArgument } from '@/util/checkArgument';

export class Worker2DContext implements IWorkerContext {
    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly ctx: CanvasRenderingContext2D;

    protected readonly defaultTypeFilter = 'Green';
    protected filterer: CPUFilter | null = null;

    protected videoElement: HTMLVideoElement | null = null;
    protected videoCoords = { ratioY: 0, height: 0, width: 0, dy: 0 };

    protected requestId: ReturnType<typeof requestAnimationFrame> | null = null;

    protected prevImageData: ImageData | null = null;

    constructor(canvas: HTMLCanvasElement) {
        checkArgument(canvas, true, 'object');

        this.canvasElement = canvas;
        this.ctx = this.canvasElement.getContext(
            '2d',
        ) as CanvasRenderingContext2D;

        this.setFilter(this.defaultTypeFilter);

        this.filterPixels = this.filterPixels.bind(this);
    }

    setFilter(filter: string): void {
        checkArgument(filter, true, 'string');

        if (CPUFilters[filter]) {
            this.filterer = CPUFilters[filter];
        } else {
            throw new Error('There is no such filter.');
        }
    }

    filter(video: HTMLVideoElement): void {
        checkArgument(video, true, 'object');

        this.videoElement = video;
        this.calcVideoPlacement();

        this.filterPixels();
    }

    stop(): void {
        if (this.requestId !== null) {
            cancelAnimationFrame(this.requestId);
        }
    }

    updateMetric(): void {
        this.calcVideoPlacement();
    }

    protected async filterPixels(): Promise<void> {
        if (!this.videoElement) throw new Error('Video not found');

        this.ctx.clearRect(
            0,
            0,
            this.canvasElement.width,
            this.canvasElement.height,
        );

        this.ctx.drawImage(
            this.videoElement,
            0,
            this.videoCoords.dy,
            this.videoCoords.width,
            this.videoCoords.height,
        );

        const imageData = this.ctx.getImageData(
            0,
            this.videoCoords.dy,
            this.videoCoords.width,
            this.videoCoords.height,
        );

        // 1920 * 1080 * 4 = 8294400
        if (imageData.data.length > 8294400) {
            if (this.prevImageData) {
                this.ctx.putImageData(
                    this.prevImageData,
                    0,
                    this.videoCoords.dy,
                );
            }

            await this.filterLoop(imageData);

            this.prevImageData = imageData;

            this.requestId = requestAnimationFrame(() => {
                this.ctx.putImageData(imageData, 0, this.videoCoords.dy);

                setTimeout(this.filterPixels, 0);
            });
        } else {
            this.filterer?.filter(imageData.data);

            this.ctx.putImageData(imageData, 0, this.videoCoords.dy);

            this.requestId = requestAnimationFrame(this.filterPixels);
        }
    }

    protected filterLoop(imageData: ImageData): Promise<ImageData> {
        checkArgument(imageData, true, 'object');

        const data = imageData.data;
        // 1920 * 1080 * 4 = 8294400 / 2 = 4147200
        const pixelByCycle = 4147200;
        const cycles = Math.ceil(data.length / pixelByCycle);

        return new Promise((res, rej) => {
            try {
                for (let index = 0; index < cycles; index++) {
                    setTimeout(() => {
                        this.filterer?.filter(data, {
                            gap:
                                index * pixelByCycle ? index * pixelByCycle : 0,
                            length: pixelByCycle,
                        });
                        if (index + 1 === cycles) res(imageData);
                    }, 0);
                }
            } catch (error) {
                rej(error);
            }
        });
    }

    protected calcVideoPlacement() {
        if (!this.videoElement) return;

        this.videoCoords.ratioY =
            this.videoElement.videoWidth / this.videoElement.videoHeight;
        this.videoCoords.height = Math.round(
            this.canvasElement.width / this.videoCoords.ratioY,
        );
        this.videoCoords.width = this.canvasElement.width;
        this.videoCoords.dy = Math.round(
            (this.canvasElement.height - this.videoCoords.height) / 2,
        );
    }
}
