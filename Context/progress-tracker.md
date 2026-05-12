# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Feature 02 (Editor Chrome) — complete in repo

## Current Goal

- Implement the next feature from `Context/feature-specs/` (see **Next Up**).

## Completed

- **Feature 01: Design System** — Tailwind v4, Ghost tokens and shadcn semantic mapping in `app/globals.css` (`:root` / `.dark`, `@theme` aliases). `lib/utils.ts` with `cn()`. shadcn/ui (Base UI): Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea. `lucide-react` installed. Root layout applies `dark` on `<html>` for dark-only UI. `npm run lint` and `npm run build` pass.
- **Feature 02: Editor Chrome** (per `Context/feature-specs/02-editor.md`) — `components/editor/editor-navbar.tsx`: fixed-height (`h-14`) top bar, three regions (left toggle / center / empty right), `PanelLeftOpen` / `PanelLeftClose` by `sidebarOpen`, `bg-surface` + `border-surface-border`. `components/editor/project-sidebar.tsx`: fixed overlay under navbar (`top-14`), does not shift main content, slide-in from left (`translate-x`), `isOpen` + `onClose`, header “Projects” + close, shadcn `Tabs` (“My Projects” / “Shared”) with empty placeholders, full-width bottom “New Project” + `Plus`. `components/editor/dialog-pattern.tsx`: composable title / optional description / optional footer using existing `components/ui/dialog` primitives and theme tokens (no product dialogs yet). `app/editor/page.tsx`: minimal shell route that wires navbar and sidebar state for verification without pushing the canvas area.

## In Progress

- None.

## Next Up

- Feature 03: Auth — see `Context/feature-specs/03-auth.md` (or `feature-specs/03-auth.md` if using root copies).

## Open Questions

- None yet.

## Architecture Decisions

- shadcn/ui over Tailwind v4 (CSS-based token config via `@theme` inline in `globals.css`).
- Dark-only theme: Ghost tokens and shadcn semantic variables on `:root` (aligned with `.dark`); `<html class="dark">` is applied in `app/layout.tsx`.
- Do not modify generated `components/ui/*` after shadcn installation; editor-specific dialog layout lives in `components/editor/dialog-pattern.tsx`.

## Session Notes

- Next.js 16.2.4, React 19, Tailwind CSS v4.
- Editor sidebar is a floating panel (fixed positioning); main canvas area is not reflowed when the sidebar opens.
- Editor chrome is mounted on `app/editor/page.tsx` as the verification surface for Feature 02.
