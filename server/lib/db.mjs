import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '..', 'data');
const DB_PATH = path.join(DATA_DIR, 'db.json');

const empty = () => ({
  users: [],
  checkouts: [],
  tickets: [],
  meta: { createdAt: new Date().toISOString() },
});

function ensure() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify(empty(), null, 2));
  }
}

export function readDb() {
  ensure();
  try {
    return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
  } catch {
    const db = empty();
    writeDb(db);
    return db;
  }
}

export function writeDb(db) {
  ensure();
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

export function uid(prefix = 'id') {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;
}
