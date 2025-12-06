import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'prisma/config';

// Resolve directory of this file (Esm) and load .env from repository root (one level up)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    // Use process.env which is populated by the explicit dotenv.config call above
    url: process.env.DATABASE_URL ?? '',
  },
});
