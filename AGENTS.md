# AGENTS.md

Minimal Next.js 16 App Router starter with React Compiler, Tailwind CSS 4,
and shadcn/ui. Use Bun. TypeScript is pinned to 6.0.3 for ESLint compatibility.

- `bun run dev` serves port 3000. `bun run build` builds the app;
  `bun run start` serves the build.
- Run `bun run typecheck` and `bun run lint`. `bun run format` writes
  TypeScript formatting. No test script is configured.
- Add primitives with `bun run shadcn add <component>`. Use the CSS theme
  tokens in `src/app/globals.css`; there is no Tailwind config file.
