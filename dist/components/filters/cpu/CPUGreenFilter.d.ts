import { CPUFilter } from './CPUFilter';
import { ICPUFilterOptions } from './CPUFilter';
export declare class CPUGreenFilter extends CPUFilter {
    filter(data: Uint8ClampedArray, options?: ICPUFilterOptions): Uint8ClampedArray;
}
