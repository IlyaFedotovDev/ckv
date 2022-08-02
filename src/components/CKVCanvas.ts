import { debounce } from '../util/debounce';
import { EventMemory } from '../util/eventMemory';

import { IWorkerContext } from './workerContext/interfaces/IWorkerContext';
import { Worker2DContext } from './workerContext/Worker2DContext';

interface ICKVCanvas {
    draw(videoElement: HTMLVideoElement): void;
    stop(): void;
    destroy(): void;
    setOptions(options: ICKVCanvasOptions): void;
}

export interface ICKVCanvasOptions {
    filter?: string;
}

export class CKVCanvas implements ICKVCanvas {
    protected readonly rootElement: HTMLElement;
    protected readonly canvasElement = document.createElement('canvas');

    protected worker: IWorkerContext;

    protected readonly eventMemory: EventMemory = new EventMemory();

    constructor(selector: string, options?: ICKVCanvasOptions) {
        if (typeof selector !== 'string')
            throw new TypeError('Selector must be a string');

        this.rootElement = document.querySelector(selector) as HTMLElement;

        if (this.rootElement === null) {
            throw new Error('Element with this selector not found');
        }

        this.rootElement.append(this.canvasElement);

        this.updateCanvas();

        this.worker = new Worker2DContext(this.canvasElement);

        if (options) {
            this.setOptions(options);
        }

        this.update = this.update.bind(this);

        const debUpdate = debounce<() => void>(this.update, 250);

        window.addEventListener('resize', debUpdate);

        this.eventMemory.remember(window, 'resize', debUpdate);
    }

    draw(videoElement: HTMLVideoElement): void {
        if (!videoElement) throw new Error('No video element');

        this.worker.filter(videoElement);
    }

    stop(): void {
        this.worker.stop();
    }

    destroy(): void {
        this.eventMemory.getAll().forEach((item) => {
            const { elem, event, callback } = item;
            elem.removeEventListener(event, callback);
        });
        this.eventMemory.forgetAll();

        this.removeCanvasElement();
    }

    setOptions(options: ICKVCanvasOptions): void {
        if (options) {
            if (options.filter) {
                this.worker.setFilter(options.filter);
            }
        }
    }

    protected removeCanvasElement() {
        this.canvasElement.remove();
    }

    protected update() {
        this.updateCanvas();
        this.worker.updateMetric();
    }

    protected updateCanvas() {
        this.canvasElement.style.width = this.rootElement.clientWidth + 'px';
        this.canvasElement.style.height = this.rootElement.clientHeight + 'px';
        this.canvasElement.width = this.rootElement.clientWidth;
        this.canvasElement.height = this.rootElement.clientHeight;
    }
}
