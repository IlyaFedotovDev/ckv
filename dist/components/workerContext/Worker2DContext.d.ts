import { IWorkerContext } from './interfaces/IWorkerContext';
import { CPUFilter } from '../filters/cpu/CPUFilter';
export declare class Worker2DContext implements IWorkerContext {
    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly ctx: CanvasRenderingContext2D;
    protected readonly defaultTypeFilter = "Green";
    protected filterer: CPUFilter | null;
    protected videoElement: HTMLVideoElement | null;
    protected videoCoords: {
        ratioY: number;
        height: number;
        width: number;
        dy: number;
    };
    protected requestId: ReturnType<typeof requestAnimationFrame> | null;
    protected prevImageData: ImageData | null;
    constructor(canvas: HTMLCanvasElement);
    setFilter(filter: string): void;
    filter(video: HTMLVideoElement): void;
    stop(): void;
    updateMetric(): void;
    protected filterPixels(): Promise<void>;
    protected filterLoop(imageData: ImageData): Promise<ImageData>;
    protected calcVideoPlacement(): void;
}
