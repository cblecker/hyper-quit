const {app, BrowserWindow} = require('electron');

exports.onWindow = (win) => {
  win.on('closed', () => {
    if (app.getWindows().size === 0) {
      app.quit();
    }
  });
};
