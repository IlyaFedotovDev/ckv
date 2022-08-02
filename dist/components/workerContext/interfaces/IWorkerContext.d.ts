export interface IWorkerContext {
    setFilter(filter: string): void;
    filter(video: HTMLVideoElement): void;
    stop(): void;
    updateMetric(): void;
}
