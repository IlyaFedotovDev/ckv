interface ICKVVideo {
    newVideo(url: string, options?: ICKVVideoOptions): void;
    play(): void;
    stop(): void;
    setVolume(int: number): void;
    seek(num: number): void;
    destroy(): void;
}

export interface ICKVVideoOptions {
    loop?: boolean;
    mute?: boolean;
    showOriginalIn?: string;
}

export class CKVVideo implements ICKVVideo {
    readonly videoElement: HTMLVideoElement = document.createElement('video');
    loaded = false;

    constructor(url: string, options?: ICKVVideoOptions) {
        this.init();

        this.newVideo(url, options);
    }

    newVideo(url: string, options?: ICKVVideoOptions): void {
        if (typeof url !== 'string')
            throw new TypeError('The path to the video should be a string.');

        this.loaded = false;

        this.videoElement.addEventListener(
            'loadeddata',
            () => {
                this.loaded = true;
            },
            { once: true },
        );

        if (options) {
            this.setOptions(options);
        }

        this.videoElement.src = url;
        this.videoElement.load();
    }

    play(): void {
        this.videoElement.play();
    }

    stop(): void {
        this.videoElement.pause();
    }

    setVolume(int: number): void {
        this.videoElement.volume = int;
    }
    seek(num: number): void {
        if (num > 1) {
            num = 1;
        } else if (num < 0) {
            num = 0;
        }
        const { duration } = this.videoElement;

        const to = duration * num;

        this.videoElement.currentTime = to;
    }
    destroy(): void {
        this.removeVideoElement();
    }

    protected removeVideoElement(): void {
        this.videoElement.remove();
    }

    protected init(): void {
        this.initVideo();
    }

    protected initVideo(): void {
        this.videoElement.crossOrigin = 'anonymous';
        this.videoElement.setAttribute('preload', 'auto');
        this.videoElement.setAttribute('playsinline', '');

        this.videoElement.className = 'CKVVideo';
    }

    protected setOptions(options: ICKVVideoOptions): void {
        if (options.loop) {
            this.videoElement.setAttribute('loop', '');
        } else {
            this.videoElement.removeAttribute('loop');
        }

        if (options.showOriginalIn) {
            if (typeof options.showOriginalIn !== 'string')
                throw new TypeError('showOriginalIn parametr should be string');

            const elemContainer = document.querySelector(
                options.showOriginalIn,
            ) as unknown as HTMLElement;

            if (elemContainer) {
                this.videoElement.style.cssText =
                    'width: 100%; height: 100%; object-fit: contain;';

                elemContainer.append(this.videoElement);
            } else {
                throw new Error('Element not found');
            }
        } else {
            this.removeVideoElement();
        }

        if (options.mute) {
            this.videoElement.muted = true;
            this.videoElement.setAttribute('muted', '');
        } else {
            this.videoElement.muted = false;
            this.videoElement.removeAttribute('muted');
        }
    }
}
