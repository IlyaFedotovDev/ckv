import { checkArgument } from '@/util/checkArgument';

interface ICKVVideo {
    newVideo(url: string, options?: ICKVVideoOptions): void;
    play(): void;
    stop(): void;
    setVolume(int: number): void;
    seek(num: number): void;
    destroy(): void;
}

export interface ICKVVideoOptions {
    [index: string]: unknown;
    loop?: boolean;
    mute?: boolean;
    showOriginalIn?: string | null;
}

export class CKVVideo implements ICKVVideo {
    readonly videoElement: HTMLVideoElement = document.createElement('video');
    loaded = false;
    protected options: Required<ICKVVideoOptions> = {
        loop: false,
        mute: false,
        showOriginalIn: null,
    };

    constructor(url: string, options?: ICKVVideoOptions) {
        checkArgument(url, true, 'string');
        checkArgument(options, false, 'object');

        this.init();

        this.newVideo(url, options);
    }

    newVideo(url: string, options?: ICKVVideoOptions): void {
        checkArgument(url, true, 'string');
        checkArgument(options, false, 'object');

        this.loaded = false;

        this.videoElement.addEventListener(
            'loadeddata',
            () => {
                this.loaded = true;
            },
            { once: true },
        );

        if (options) {
            this.mergeOptions(options);
            this.setOptions(this.options);
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
        checkArgument(int, true, 'number');

        this.videoElement.volume = int;
    }
    seek(num: number): void {
        checkArgument(num, true, 'number');

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

    protected mergeOptions(options: ICKVVideoOptions) {
        checkArgument(options, true, 'object');

        const optKeys: string[] = Object.keys(this.options);

        for (let index = 0; index < optKeys.length; index++) {
            const key: string = optKeys[index];

            if (key in options) {
                this.options[key] = options[key];
            }
        }
    }

    protected setOptions(options: ICKVVideoOptions): void {
        checkArgument(options, true, 'object');

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
