const g = globalThis;
if (!g.__fluxaStore) {
  g.__fluxaStore = { users: [], checkouts: [], tickets: [] };
}
export function store() {
  return g.__fluxaStore;
}
export function uid(prefix = 'id') {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;
}
