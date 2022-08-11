# Javascript library for processing chromakey video in browser

## Installation

### NPM

```bash
npm install -D ckv
```

## Usage

### ES6 modules

```javascript
import CKV from ckv;
```

### CommonJS

```javascript
const CKV = require('ckv');
```

### Example

```javascript
import CKV from ckv;

const ckVideo = new CKV('.selector-where-show', 'path/to/video.mp4', {filter: 'Green', loop: true, mute: true});
ckVideo.play().then(()=> 'do something');
```

## API

### CKV(selector: string, url: string, options?: ICKVOptions)

-   selector - HTMLElement where the filtered video will be displayed
-   url - path to video
-   options(optional):

```typescript
interface ICKVOptions {
    loop?: boolean; // playback loop. Default: false
    mute?: boolean; // playback mute. Default: false
    showOriginalIn?: string; // selector where to show the original video. Default: null
    filter?: string; // supports: ['Green']. Default: 'Green'
}
```

### Methods

```typescript
interface ICKV {
    play(): Promise<void>;
    stop(): void;
    newVideo(url: string, options?: ICKVOptions): void;
    setVolume(num: number): void;
    seek(num: number): void;
    destroy(): void;
}
```

### .play(): Promise<void>

Starts playback

### .stop(): void

Stop playback

### .newVideo(url: string, options?: ICKVOptions): void

Installing a new video. Need to run again

### .setVolume(num: number): void

num - range [0, 1]. Required option mute: false

### .seek(num: number): void

num - range [0, 1]. Video rewind

### .destroy(): void

Removes all event listeners and elements

```javascript
const ckVideo = new CKV('.selector-where-show', 'path/to/video.mp4', {
    filter: 'Green',
    loop: true,
    mute: true,
});
ckVideo.destroy();
ckVideo = null;
```

## Browser support

| Chrome | Safari | Edge | Firefox | Opera |
| ------ | ------ | ---- | ------- | ----- |
| 33+    | 7.1+   | 12+  | 29+     | 20+   |

## How does it work

Uses 2d context(CPU)(temporarily).
Up to 2,073,600 (1920 \* 1080) pixels are processed in the main thread. If more, then it breaks into cycles of 1,036,800.

## To do:

-   Shader processing(GPU)
-   adding custom filters

## License

[MIT License](./LICENSE)
