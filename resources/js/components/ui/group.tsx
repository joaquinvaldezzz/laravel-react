"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

import type { VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";

const groupVariants = cva(
  "flex w-fit *:focus-visible:z-1 has-[>[data-slot=group]]:gap-2 *:has-focus-visible:z-1",
  {
    defaultVariants: {
      orientation: "horizontal",
    },
    variants: {
      orientation: {
        horizontal:
          "*:[[data-slot]~[data-slot]:not([data-slot=separator])]:before:-start-[0.5px] *:data-slot:not-data-[slot=separator]:has-[~[data-slot]]:before:-end-[0.5px] *:pointer-coarse:after:min-w-auto *:data-slot:has-[~[data-slot]]:rounded-e-none *:data-slot:has-[~[data-slot]]:border-e-0 *:data-slot:has-[~[data-slot]]:before:rounded-e-none *:[[data-slot]~[data-slot]]:rounded-s-none *:[[data-slot]~[data-slot]]:border-s-0 *:[[data-slot]~[data-slot]]:before:rounded-s-none",
        vertical:
          "*:[[data-slot]~[data-slot]:not([data-slot=separator])]:before:-top-[0.5px] *:data-slot:not-data-[slot=separator]:has-[~[data-slot]]:before:-bottom-[0.5px] flex-col *:pointer-coarse:after:min-h-auto *:data-slot:has-[~[data-slot]]:rounded-b-none *:data-slot:has-[~[data-slot]]:border-b-0 *:data-slot:not-data-[slot=separator]:has-[~[data-slot]]:before:hidden *:data-slot:has-[~[data-slot]]:before:rounded-b-none *:[[data-slot]~[data-slot]]:rounded-t-none *:[[data-slot]~[data-slot]]:border-t-0 *:[[data-slot]~[data-slot]]:before:rounded-t-none",
      },
    },
  },
);

function Group({
  className = undefined,
  orientation = undefined,
  children,
  ...props
}: {
  className?: string;
  orientation?: VariantProps<typeof groupVariants>["orientation"];
  children: ReactNode;
} & ComponentProps<"div">) {
  return (
    <div
      className={cn(groupVariants({ orientation }), className)}
      data-orientation={orientation}
      data-slot="group"
      role="group"
      {...props}
    >
      {children}
    </div>
  );
}

function GroupText({ className, render, ...props }: useRender.ComponentProps<"div">) {
  const defaultProps = {
    className: cn(
      "border-input bg-muted text-muted-foreground shadow-xs/5 not-dark:bg-clip-padding [&_svg:not([class*='size-'])]:size-4.5 relative inline-flex items-center whitespace-nowrap rounded-lg border px-[calc(--spacing(3)-1px)] text-base outline-none transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/6%)] sm:text-sm sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:-mx-0.5 [&_svg]:shrink-0",
      className,
    ),
    "data-slot": "group-text",
  };
  return useRender({
    defaultTagName: "div",
    props: mergeProps(defaultProps, props),
    render,
  });
}

function GroupSeparator({
  className = undefined,
  orientation = "vertical",
  ...props
}: {
  className?: string;
} & ComponentProps<typeof Separator>) {
  return (
    <Separator
      className={cn(
        "z-2 has-[+[data-slot=input-control]:focus-within,+[data-slot=select-trigger]:focus-visible+*,+[data-slot=number-field]:focus-within]:bg-ring [[data-slot=input-control]:focus-within+&,[data-slot=select-trigger]:focus-visible+*+&]:-translate-x-px [[data-slot=input-control]:focus-within+&,[data-slot=select-trigger]:focus-visible+*+&,[data-slot=number-field]:focus-within+&]:bg-ring pointer-events-none relative before:absolute before:inset-0 has-[+[data-slot=input-control]:focus-within,+[data-slot=select-trigger]:focus-visible+*,+[data-slot=number-field]:focus-within]:translate-x-px",
        className,
      )}
      orientation={orientation}
      {...props}
    />
  );
}

export {
  Group as ButtonGroup,
  GroupSeparator as ButtonGroupSeparator,
  GroupText as ButtonGroupText,
  Group,
  GroupSeparator,
  GroupText,
  groupVariants,
};
