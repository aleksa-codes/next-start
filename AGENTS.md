# AI Coding Agent Instructions

## Tech Stack & Environment

- **Next.js 16** (App Router, React Server Components)
- **React 19.2** (React Compiler enabled via `next.config.ts`)
- **Tailwind CSS v4** (OKLCH, CSS variables, no more tailwind.config.js)
- **TypeScript** (Strict mode)
- **Bun** (Package manager - use `bun add`, NOT `npm install`)
- **Path Alias:** `@/*` → `./src/*`

## Project Structure

```text
src/
├── app/              # App Router pages and layouts
│   ├── globals.css   # Tailwind v4 imports + theme CSS variables
│   └── layout.tsx    # Root layout with next-themes ThemeProvider
├── components/       # Custom components
│   └── ui/           # Auto-generated shadcn components (DO NOT MODIFY DIRECTLY)
└── lib/
    └── utils.ts      # cn() utility for className merging
```

## Strict AI Rules & Best Practices

### React & Next.js

- **Default to Server Components:** Omit `'use client'` unless the component requires interactivity, hooks, or browser APIs.
- **AVOID `useEffect`:** Do NOT use `useEffect` unless absolutely necessary (e.g., syncing with non-React external systems or attaching global window listeners). Prefer derived state, event handlers, or React 19 features.
- **React Compiler is ENABLED:** Do NOT manually use `useMemo` or `useCallback` unless specifically required for bypassing a compiler limitation. The compiler handles memoization.
- **Data Fetching:** Fetch data in Server Components and pass down as props.

### Styling & Theming

- **Tailwind Only:** Use utility classes and `@/lib/utils` `cn()` for merging.
- **Use CSS Variables:** Always use theme tokens (e.g., `text-muted-foreground`, `bg-background`). NEVER use hardcoded HEX/RGB values.
- **Dark Mode:** Managed by `next-themes`. Use the `dark:*` variant for specific overrides, but rely on CSS variables for primary theming.

## Commands

```bash
bun dev                              # Dev server
bun build                            # Production build
bun lint && bun format               # ESLint and Prettier
bun run shadcn add <component_name>  # Add a shadcn component
```

## UI Components (shadcn/ui)

Always prefer using these pre-built components over creating new ones from scratch.
**Available:** Accordion, Alert, Alert Dialog, Aspect Ratio, Avatar, Badge, Breadcrumb, Button, Button Group, Chart, Calendar, Card, Carousel, Checkbox, Collapsible, Combobox, Command, Context Menu, Data Table, Date Picker, Dialog, Drawer, Dropdown Menu, Empty, Field, Form, Hover Card, Input, Input Group, Input OTP, Item, Kbd, Label, Menubar, Native Select, Navigation Menu, Pagination, Popover, Progress, Radio Group, Resizable, Scroll Area, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner, Spinner, Switch, Table, Tabs, Textarea, Toast, Toggle, Toggle Group, Tooltip.

### Component Composition Rule

**Do NOT modify shadcn/ui components in `src/components/ui/` directly.** Instead, compose and extend them in `src/components/`.

**Example of proper extension:**

```tsx
"use client"

import { Check, Copy } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function CopyButton({
  value,
  className,
  ...props
}: React.ComponentProps<typeof Button> & { value: string }) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    if (!value) return
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleCopy}
      aria-label={copied ? "Copied to clipboard" : "Copy to clipboard"}
      className={cn("cursor-pointer", className)}
      {...props}
    >
      {copied ? <Check /> : <Copy />}
    </Button>
  )
}

export { CopyButton }
```
