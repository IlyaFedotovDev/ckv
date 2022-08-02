interface MemoryItem {
    elem: EventTarget;
    event: string;
    callback: (...args: any[]) => void;
}

type MemoryType = MemoryItem[];

export class EventMemory {
    memory: MemoryType = [];

    remember(
        elem: EventTarget,
        event: string,
        callback: (...args: any[]) => void,
    ) {
        this.memory.push({ elem, event, callback });
    }

    getAll() {
        return this.memory;
    }

    forgetAll() {
        this.memory = [];
    }
}
