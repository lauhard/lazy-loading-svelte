

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5dfec32e.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/index.f0b6ad98.js","_app/immutable/chunks/singletons.5d29e2c3.js"];
export const stylesheets = [];
export const fonts = [];
