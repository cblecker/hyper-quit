# hyper-quit
Quit [Hyper](https://hyper.is/) on macOS when last window closes.

[![npm version](https://img.shields.io/npm/v/hyper-quit.svg?maxAge=3600)](https://www.npmjs.com/package/hyper-quit)
[![npm total downloads](https://img.shields.io/npm/dt/hyper-quit.svg?maxAge=3600)](https://www.npmjs.com/package/hyper-quit)
[![npm monthly downloads](https://img.shields.io/npm/dm/hyper-quit.svg?maxAge=3600)](https://www.npmjs.com/package/hyper-quit)
[![license](https://img.shields.io/npm/l/hyper-quit.svg?maxAge=3600)](./LICENSE)

_Note:_ This has no effect on other operating systems as Hyper will already exit
when the last window is closed.

## Installation
To install, edit `~/.hyper.js` and add `"hyper-quit"` to `plugins`:

```javascript
plugins: ["hyper-quit"],
```

Or you can install with [hpm](https://github.com/zeit/hpm):
```bash
hpm install hyper-quit
```
