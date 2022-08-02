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
export declare class CKVVideo implements ICKVVideo {
    readonly videoElement: HTMLVideoElement;
    loaded: boolean;
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
    protected setOptions(options: ICKVVideoOptions): void;
}
export {};
