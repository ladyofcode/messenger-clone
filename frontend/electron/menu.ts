const { app, BrowserWindow, Menu, shell } = require('electron');
const mainProcess = require('./main');

const template: Electron.MenuItemConstructorOptions[] = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Log out',
        accelerator: 'CommandOrControl+L',
      },
    ]
  }
];

module.exports = Menu.buildFromTemplate(template);

