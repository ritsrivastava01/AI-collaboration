"use client"

import { PanelLeftClose, PanelLeftOpen } from "lucide-react"

import { Button } from "@/components/ui/button"

interface EditorNavbarProps {
  sidebarOpen: boolean
  onSidebarToggle: () => void
}

export function EditorNavbar({
  sidebarOpen,
  onSidebarToggle,
}: EditorNavbarProps) {
  const SidebarIcon = sidebarOpen ? PanelLeftClose : PanelLeftOpen

  return (
    <header className="flex h-14 items-center justify-between border-b border-surface-border bg-surface px-4">
      <div className="flex min-w-0 flex-1 items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={onSidebarToggle}
          aria-label={sidebarOpen ? "Close project sidebar" : "Open project sidebar"}
        >
          <SidebarIcon className="h-5 w-5 text-copy-secondary" />
        </Button>
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-center" />

      <div className="flex min-w-0 flex-1 items-center justify-end" />
    </header>
  )
}