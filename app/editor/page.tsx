"use client"

import { useState } from "react"

import { EditorNavbar } from "@/components/editor/editor-navbar"
import { ProjectSidebar } from "@/components/editor/project-sidebar"

export default function EditorPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <main className="min-h-dvh bg-base text-copy-primary">
      <EditorNavbar
        sidebarOpen={sidebarOpen}
        onSidebarToggle={() => setSidebarOpen((current) => !current)}
      />

      <ProjectSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <section className="relative flex min-h-[calc(100dvh-3.5rem)] items-center justify-center overflow-hidden bg-base">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,200,212,0.08),transparent_42%)]" />
        <div className="relative mx-6 flex w-full max-w-3xl flex-col items-center rounded-3xl border border-surface-border bg-surface/70 px-8 py-16 text-center shadow-2xl shadow-black/20 backdrop-blur-sm">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-copy-faint">
            Editor Chrome
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-copy-primary">
            Ghost AI workspace shell
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-copy-muted">
            This route hosts the shared editor frame for future canvas, sidebar, and
            dialog work.
          </p>
        </div>
      </section>
    </main>
  )
}