export declare function debounce<T extends (...args: any[]) => unknown>(callback: T, wait: number): (...args: Parameters<T>) => void;
