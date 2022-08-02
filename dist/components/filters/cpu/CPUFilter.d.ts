export interface ICPUFilterOptions {
    gap?: number;
    length?: number;
}
export declare abstract class CPUFilter {
    abstract filter(imageData: Uint8ClampedArray, options?: ICPUFilterOptions): Uint8ClampedArray;
}
