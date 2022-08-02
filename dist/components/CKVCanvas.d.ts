import { EventMemory } from '../util/eventMemory';
import { IWorkerContext } from './workerContext/interfaces/IWorkerContext';
interface ICKVCanvas {
    draw(videoElement: HTMLVideoElement): void;
    stop(): void;
    destroy(): void;
    setOptions(options: ICKVCanvasOptions): void;
}
export interface ICKVCanvasOptions {
    filter?: string;
}
export declare class CKVCanvas implements ICKVCanvas {
    protected readonly rootElement: HTMLElement;
    protected readonly canvasElement: HTMLCanvasElement;
    protected worker: IWorkerContext;
    protected readonly eventMemory: EventMemory;
    constructor(selector: string, options?: ICKVCanvasOptions);
    draw(videoElement: HTMLVideoElement): void;
    stop(): void;
    destroy(): void;
    setOptions(options: ICKVCanvasOptions): void;
    protected removeCanvasElement(): void;
    protected update(): void;
    protected updateCanvas(): void;
}
export {};
