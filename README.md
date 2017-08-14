# hyper-quit
Quit [Hyper](https://hyper.is/) on macOS when last window closes.

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
