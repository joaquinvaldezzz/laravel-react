import { cn } from "@/lib/utils";

import type { ComponentProps } from "react";

function Frame({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-muted/72 relative flex flex-col rounded-2xl p-1",
        "*:[[data-slot=frame-panel]+[data-slot=frame-panel]]:mt-1",
        className,
      )}
      data-slot="frame"
      {...props}
    />
  );
}

function FramePanel({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-background shadow-xs/5 relative rounded-xl border bg-clip-padding p-5 before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_1px_--theme(--color-black/6%)]",
        className,
      )}
      data-slot="frame-panel"
      {...props}
    />
  );
}

function FrameHeader({ className, ...props }: ComponentProps<"header">) {
  return (
    <header
      className={cn("flex flex-col px-5 py-4", className)}
      data-slot="frame-panel-header"
      {...props}
    />
  );
}

function FrameTitle({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("text-sm font-semibold", className)}
      data-slot="frame-panel-title"
      {...props}
    />
  );
}

function FrameDescription({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("text-muted-foreground text-sm", className)}
      data-slot="frame-panel-description"
      {...props}
    />
  );
}

function FrameFooter({ className, ...props }: ComponentProps<"footer">) {
  return (
    <footer
      className={cn("flex flex-col gap-1 px-5 py-4", className)}
      data-slot="frame-panel-footer"
      {...props}
    />
  );
}

export { Frame, FrameDescription, FrameFooter, FrameHeader, FramePanel, FrameTitle };
