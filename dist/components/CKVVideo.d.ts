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
export declare class CKVVideo implements ICKVVideo {
    readonly videoElement: HTMLVideoElement;
    loaded: boolean;
    protected options: Required<ICKVVideoOptions>;
    constructor(url: string, options?: ICKVVideoOptions);
    newVideo(url: string, options?: ICKVVideoOptions): void;
    play(): void;
    stop(): void;
    setVolume(int: number): void;
    seek(num: number): void;
    destroy(): void;
    protected removeVideoElement(): void;
    protected init(): void;
    protected initVideo(): void;
    protected mergeOptions(options: ICKVVideoOptions): void;
    protected setOptions(options: ICKVVideoOptions): void;
}
export {};
