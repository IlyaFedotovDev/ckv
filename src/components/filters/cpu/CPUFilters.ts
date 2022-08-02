import { CPUFilter } from './CPUFilter';
import { CPUGreenFilter } from './CPUGreenFilter';

interface ICPUFilters {
    readonly [index: string]: CPUFilter;
}

export const CPUFilters: ICPUFilters = {
    Green: new CPUGreenFilter(),
};
