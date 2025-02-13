import * as React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createHashHistory,
  createBrowserHistory,
  createRouter,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./styles.css";

declare global {
  interface Window {
    process?: {
      type: string;
    };
  }
}

const isElectron = window && window.process && window.process.type;

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  history: isElectron ? createHashHistory() : createBrowserHistory(),
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RouterProvider router={router} />);
}
