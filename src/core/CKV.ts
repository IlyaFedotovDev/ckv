import { CKVCanvas, ICKVCanvasOptions } from '@/components/CKVCanvas';
import { CKVVideo, ICKVVideoOptions } from '@/components/CKVVideo';

interface ICKVOptions extends ICKVCanvasOptions, ICKVVideoOptions {}

interface ICKV {
    play(): Promise<void>;
    stop(): void;
    newVideo(url: string, options?: ICKVOptions): void;
    setVolume(num: number): void;
    seek(num: number): void;
    destroy(): void;
}

export class CKV implements ICKV {
    private readonly canvas: CKVCanvas;
    private readonly video: CKVVideo;

    constructor(selector: string, url: string, options?: ICKVOptions) {
        this.canvas = new CKVCanvas(selector, options);
        this.video = new CKVVideo(url, options);
    }

    async play(): Promise<void> {
        if (!this.video.videoElement.paused) {
            console.log('Already running');
            return;
        }

        const start = () => {
            this.video.play();
            this.canvas.draw(this.video.videoElement);
        };

        try {
            if (this.video.loaded) {
                start();
            } else {
                await new Promise<void>((resolve) => {
                    this.video.videoElement.addEventListener(
                        'loadeddata',
                        () => {
                            start();
                            resolve();
                        },
                        {
                            once: true,
                        },
                    );
                });
            }
        } catch (error) {
            console.error(error);
        }
        return;
    }

    stop(): void {
        this.canvas.stop();
        this.video.stop();
    }

    setVolume(num: number): void {
        this.video.setVolume(num);
    }
    seek(num: number): void {
        this.video.seek(num);
    }
    newVideo(url: string, options?: ICKVOptions): void {
        if (!this.video.videoElement.paused) {
            this.stop();
        }

        this.video.newVideo(url, options);

        if (options) {
            this.canvas.setOptions(options);
        }
    }

    destroy(): void {
        this.stop();
        this.canvas.destroy();
        this.video.destroy();
    }
}
