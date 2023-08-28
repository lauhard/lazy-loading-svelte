export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cat2.jpg","favicon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.1b77396b.js","app":"_app/immutable/entry/app.828e9499.js","imports":["_app/immutable/entry/start.1b77396b.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/singletons.5d29e2c3.js","_app/immutable/entry/app.828e9499.js","_app/immutable/chunks/scheduler.cc1c0861.js","_app/immutable/chunks/index.f0b6ad98.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
