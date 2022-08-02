import { ICKVCanvasOptions } from '@/components/CKVCanvas';
import { ICKVVideoOptions } from '@/components/CKVVideo';
interface ICKVOptions extends ICKVCanvasOptions, ICKVVideoOptions {
}
interface ICKV {
    play(): Promise<void>;
    stop(): void;
    newVideo(url: string, options?: ICKVOptions): void;
    setVolume(num: number): void;
    seek(num: number): void;
    destroy(): void;
}
export declare class CKV implements ICKV {
    private readonly canvas;
    private readonly video;
    constructor(selector: string, url: string, options?: ICKVOptions);
    play(): Promise<void>;
    stop(): void;
    setVolume(num: number): void;
    seek(num: number): void;
    newVideo(url: string, options?: ICKVOptions): void;
    destroy(): void;
}
export {};
