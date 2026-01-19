import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

import { AnchoredToastProvider, ToastProvider } from "@/components/ui/toast";

import type { route } from "ziggy-js";
import type { Ziggy } from "./ziggy";

import "../css/app.css";

declare global {
  interface Window {
    Ziggy: typeof Ziggy;
    route: typeof route;
  }
}

const appName: string = import.meta.env.VITE_APP_NAME ?? "Laravel";

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),
  resolve: async (name) =>
    resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob("./pages/**/*.tsx")),
  setup({ el, App, props }) {
    const root = createRoot(el);

    window.Ziggy = props.initialPage.props.ziggy;

    root.render(
      <ToastProvider>
        <AnchoredToastProvider>
          <App {...props} />
        </AnchoredToastProvider>
      </ToastProvider>,
    );
  },
  progress: {
    color: "var(--primary)",
  },
});
