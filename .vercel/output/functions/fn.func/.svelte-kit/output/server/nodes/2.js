

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.61b7a5f4.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/index.f0b6ad98.js"];
export const stylesheets = ["_app/immutable/assets/2.06feda5b.css"];
export const fonts = [];
