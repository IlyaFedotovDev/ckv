interface MemoryItem {
    elem: EventTarget;
    event: string;
    callback: (...args: any[]) => void;
}
declare type MemoryType = MemoryItem[];
export declare class EventMemory {
    memory: MemoryType;
    remember(elem: EventTarget, event: string, callback: (...args: any[]) => void): void;
    getAll(): MemoryType;
    forgetAll(): void;
}
export {};
