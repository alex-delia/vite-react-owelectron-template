/* eslint-disable @typescript-eslint/no-require-imports */

const { contextBridge } = require("electron");

console.log("Preload script loaded");

// Expose specific APIs to the renderer process
contextBridge.exposeInMainWorld("electronAPI", {
  isElectron: true,
});
