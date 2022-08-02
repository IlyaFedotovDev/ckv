import { CPUFilter } from './CPUFilter';
import { ICPUFilterOptions } from './CPUFilter';

export class CPUGreenFilter extends CPUFilter {
    filter(
        data: Uint8ClampedArray,
        options?: ICPUFilterOptions,
    ): Uint8ClampedArray {
        const d = data;

        let g = 0,
            l = d.length;

        if (options?.gap) {
            g = options.gap < l ? options.gap : 0;
        }

        if (options?.length) {
            l = l - g >= options.length ? options.length : l - g;
        }

        for (let i = g, cl = 0; cl < l; i += 4, cl += 4) {
            const RGBA = {
                R: i + 0,
                G: i + 1,
                B: i + 2,
                A: i + 3,
            };

            if (
                d[RGBA.G] > 80 &&
                d[RGBA.R] <= d[RGBA.G] * 0.6875 &&
                d[RGBA.B] <= d[RGBA.G] * 0.71428
            ) {
                d[RGBA.A] = 0;
            } else if (
                d[RGBA.G] >= 50 &&
                d[RGBA.G] <= 130 &&
                d[RGBA.R] <= d[RGBA.G] * 0.76 &&
                d[RGBA.B] <= d[RGBA.G] * 0.4
            ) {
                d[RGBA.A] = 0;
            } else if (
                d[RGBA.G] < 80 &&
                d[RGBA.R] <= d[RGBA.G] * 0.6875 &&
                d[RGBA.B] <= d[RGBA.G] * 0.5
            ) {
                d[RGBA.R] =
                    d[RGBA.G] =
                    d[RGBA.B] =
                        Math.round((d[RGBA.R] + d[RGBA.G] + d[RGBA.B]) / 3);
            } else if (
                d[RGBA.G] > 80 &&
                d[RGBA.R] >= d[RGBA.G] * 0.6875 &&
                d[RGBA.R] <= d[RGBA.G] * 0.75 &&
                d[RGBA.B] >= d[RGBA.G] * 0.5 &&
                d[RGBA.B] <= d[RGBA.G] * 0.6875
            ) {
                d[RGBA.R] =
                    d[RGBA.G] =
                    d[RGBA.B] =
                        Math.round((d[RGBA.R] + d[RGBA.G] + d[RGBA.B]) / 3);
            }
        }

        return d;
    }
}
