"use client"

import * as React from "react"

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface DialogPatternProps
  extends Omit<React.ComponentProps<typeof DialogContent>, "children" | "title"> {
  title: React.ReactNode
  description?: React.ReactNode
  footer?: React.ReactNode
  children?: React.ReactNode
}

export function DialogPattern({
  title,
  description,
  footer,
  children,
  className,
  ...props
}: DialogPatternProps) {
  return (
    <DialogContent
      className={cn(
        "max-w-2xl rounded-3xl border border-surface-border bg-elevated p-0 text-copy-primary shadow-2xl shadow-black/30",
        className
      )}
      {...props}
    >
      <div className="px-6 py-6 sm:px-7">
        <DialogHeader className="gap-3">
          <DialogTitle className="text-lg font-semibold text-copy-primary">
            {title}
          </DialogTitle>
          {description ? (
            <DialogDescription className="text-sm leading-6 text-copy-muted">
              {description}
            </DialogDescription>
          ) : null}
        </DialogHeader>

        {children ? <div className="mt-6">{children}</div> : null}
      </div>

      {footer ? (
        <DialogFooter className="rounded-b-3xl border-surface-border bg-subtle/70 px-6 py-4 sm:px-7">
          {footer}
        </DialogFooter>
      ) : null}
    </DialogContent>
  )
}