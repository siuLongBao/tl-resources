# vedio-jarvis
TL resources for vedio generation

## Frontend — Install & Run

Prerequisites:
- Node.js >= 22.12.0
- pnpm (recommended)

Commands:

```bash
# from repo root
cd frontend
pnpm install
pnpm dev      # start Vite dev server
pnpm build    # build for production
pnpm preview  # preview built app
```

If you don't have Node 22 installed, use a version manager, for example:

```bash
# using fnm (example)
brew install fnm
fnm install 22
fnm use 22
```

Notes:
- The frontend project is scaffolded with Vite + React + TypeScript and expects ESM (see `frontend/package.json` and `frontend/tsconfig.node.json`).

