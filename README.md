# next-start

A minimal, production-ready Next.js starter template optimized for rapid UI development. Built with the latest React 19 features, Tailwind CSS v4, and pre-configured for seamless AI agent workflows.

**Tech Stack:** Next.js 16 (App Router) · React 19.2 · Tailwind CSS v4 · shadcn/ui · Bun

---

## 🚀 Quick Start

Make sure you have [Bun](https://bun.sh/) installed, as it is the primary package manager for this project.

```bash
# Install dependencies
bun install

# Start the development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## ✨ Key Features

- **React Compiler Enabled:** Configured natively in `next.config.ts` (`reactCompiler: true`). No manual `useMemo` or `useCallback` required.
- **Tailwind CSS v4:** Modern, CSS-first setup. No `tailwind.config.js` required. Configured entirely via `src/app/globals.css` using CSS variables, inline themes, and built-in plugins (`@tailwindcss/typography`).
- **Automated Code Quality:**
  - Strict ESLint configuration.
  - Prettier auto-formatting with `prettier-plugin-organize-imports` and `prettier-plugin-tailwindcss` for consistent code style.
- **shadcn/ui Ready:** Pre-configured with path aliases (`@/*`) and dynamic component generation.

## 🧰 Commands

| Command                     | Description                                                               |
| :-------------------------- | :------------------------------------------------------------------------ |
| `bun dev`                   | Start the development server                                              |
| `bun build`                 | Build the app for production                                              |
| `bun start`                 | Run the built production server                                           |
| `bun lint`                  | Run ESLint to catch errors                                                |
| `bun format`                | Run Prettier to auto-format code, sort imports, and sort Tailwind classes |
| `bun run shadcn add <name>` | Generate and add a new shadcn/ui component                                |

## 🏗️ Project Structure

```text
src/
├── app/              # Next.js App Router pages, layouts, and globals.css
├── components/       # Custom application components
│   └── ui/           # Auto-generated shadcn/ui components (do not edit directly)
└── lib/
    └── utils.ts      # Helper utilities (e.g., cn() for Tailwind class merging)
```

## 🧩 Adding UI Components

We use [shadcn/ui](https://ui.shadcn.com/) for building consistent, accessible interfaces.

To add a new component, run:

```bash
bun run shadcn add button
```

Then, import and use it via the `@` path alias:

```tsx
import { Button } from "@/components/ui/button"

export default function Page() {
  return <Button>Click me</Button>
}
```

## 🤖 AI Agents & Guidelines

If you are using AI coding assistants (like Cursor, GitHub Copilot, or Claude), please refer to [`AGENTS.md`](./AGENTS.md). It contains strict project conventions, styling rules, and React 19 best practices tailored specifically for this codebase.
