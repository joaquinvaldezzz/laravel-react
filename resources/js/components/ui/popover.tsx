"use client";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";

import { cn } from "@/lib/utils";

const PopoverCreateHandle = PopoverPrimitive.createHandle;

const Popover = PopoverPrimitive.Root;

function PopoverTrigger(props: PopoverPrimitive.Trigger.Props) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverPopup({
  children,
  className,
  side = "bottom",
  align = "center",
  sideOffset = 4,
  alignOffset = 0,
  tooltipStyle = false,
  ...props
}: PopoverPrimitive.Popup.Props & {
  side?: PopoverPrimitive.Positioner.Props["side"];
  align?: PopoverPrimitive.Positioner.Props["align"];
  sideOffset?: PopoverPrimitive.Positioner.Props["sideOffset"];
  alignOffset?: PopoverPrimitive.Positioner.Props["alignOffset"];
  tooltipStyle?: boolean;
}) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        className="h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) data-instant:transition-none z-50 transition-[top,left,right,bottom,transform]"
        data-slot="popover-positioner"
        side={side}
        sideOffset={sideOffset}
      >
        <PopoverPrimitive.Popup
          className={cn(
            "h-(--popup-height,auto) w-(--popup-width,auto) origin-(--transform-origin) bg-popover text-popover-foreground shadow-lg/5 not-dark:bg-clip-padding data-starting-style:scale-98 data-starting-style:opacity-0 relative flex rounded-lg border transition-[width,height,scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/6%)]",
            tooltipStyle &&
              "shadow-md/5 w-fit text-balance rounded-md text-xs before:rounded-[calc(var(--radius-md)-1px)]",
            className,
          )}
          data-slot="popover-popup"
          {...props}
        >
          <PopoverPrimitive.Viewport
            className={cn(
              "max-h-(--available-height) px-(--viewport-inline-padding) **:data-current:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding)-2px)] **:data-current:opacity-100 **:data-current:transition-opacity **:data-current:data-ending-style:opacity-0 data-instant:transition-none **:data-previous:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding)-2px)] **:data-previous:opacity-100 **:data-previous:transition-opacity **:data-previous:data-ending-style:opacity-0 **:data-current:data-starting-style:opacity-0 **:data-previous:data-starting-style:opacity-0 relative size-full overflow-clip py-4 outline-none [--viewport-inline-padding:--spacing(4)]",
              tooltipStyle
                ? "py-1 [--viewport-inline-padding:--spacing(2)]"
                : "not-data-transitioning:overflow-y-auto",
            )}
            data-slot="popover-viewport"
          >
            {children}
          </PopoverPrimitive.Viewport>
        </PopoverPrimitive.Popup>
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  );
}

function PopoverClose({ ...props }: PopoverPrimitive.Close.Props) {
  return <PopoverPrimitive.Close data-slot="popover-close" {...props} />;
}

function PopoverTitle({ className, ...props }: PopoverPrimitive.Title.Props) {
  return (
    <PopoverPrimitive.Title
      className={cn("text-lg font-semibold leading-none", className)}
      data-slot="popover-title"
      {...props}
    />
  );
}

function PopoverDescription({ className, ...props }: PopoverPrimitive.Description.Props) {
  return (
    <PopoverPrimitive.Description
      className={cn("text-muted-foreground text-sm", className)}
      data-slot="popover-description"
      {...props}
    />
  );
}

export {
  PopoverCreateHandle,
  Popover,
  PopoverTrigger,
  PopoverPopup,
  PopoverPopup as PopoverContent,
  PopoverTitle,
  PopoverDescription,
  PopoverClose,
};
