export {};

declare global {
  interface ElectronAPI {
    isElectron: boolean;
  }

  interface Window {
    electronAPI?: ElectronAPI;
  }
}
