export function debounce<T extends (...args: any[]) => unknown>(
    callback: T,
    wait: number,
) {
    let timeout: ReturnType<typeof setTimeout> | undefined;

    return (...args: Parameters<T>): void => {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            timeout = undefined;
            callback(...args);
        }, wait);
    };
}
