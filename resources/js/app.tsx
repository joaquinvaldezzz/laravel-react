import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

import { AnchoredToastProvider, ToastProvider } from "@/components/ui/toast";

import { Ziggy } from "./ziggy";

import "../css/app.css";

declare global {
  interface Window {
    Ziggy: typeof Ziggy;
  }
}

const appName: string = import.meta.env.VITE_APP_NAME ?? "Laravel";

window.Ziggy = Ziggy;

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),
  resolve: async (name) =>
    resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob("./pages/**/*.tsx")),
  setup({ el, App, props }) {
    const root = createRoot(el);

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
