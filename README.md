# Next Start

A small Next.js 16 starter for projects that need a UI but not a database or
auth. It includes the App Router, React Compiler, Tailwind CSS 4, shadcn/ui,
and a light/dark theme toggle.

## Run locally

With [Bun](https://bun.sh/) installed, run:

```sh
bun install
bun run dev
```

Open [localhost:3000](http://localhost:3000). No environment file is needed.

## Make it yours

Replace the starter page in [`src/app/page.tsx`](src/app/page.tsx). Set your
metadata and fonts in [`src/app/layout.tsx`](src/app/layout.tsx), and adjust
theme tokens in [`src/app/globals.css`](src/app/globals.css). Add UI primitives
with `bun run shadcn add <component>`.

## Commands

| Command             | What it does               |
| ------------------- | -------------------------- |
| `bun run typecheck` | Check TypeScript           |
| `bun run lint`      | Run ESLint                 |
| `bun run format`    | Format TypeScript files    |
| `bun run build`     | Build for production       |
| `bun run start`     | Serve the production build |

## For agents

See [AGENTS.md](AGENTS.md) for verification commands and UI conventions.

## License

[MIT](LICENSE)
