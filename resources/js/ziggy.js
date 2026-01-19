const Ziggy = {
  url: "http:\/\/localhost:8000",
  port: 8000,
  defaults: {},
  routes: {
    home: { uri: "\/", methods: ["GET", "HEAD"] },
    "posts.store": { uri: "posts", methods: ["POST"] },
    "tasks.index": { uri: "tasks", methods: ["GET", "HEAD"] },
    "tasks.store": { uri: "tasks", methods: ["POST"] },
    "tasks.update": {
      uri: "tasks\/{task}",
      methods: ["PUT"],
      parameters: ["task"],
      bindings: { task: "id" },
    },
    "tasks.destroy": {
      uri: "tasks\/{task}",
      methods: ["DELETE"],
      parameters: ["task"],
      bindings: { task: "id" },
    },
    "storage.local": {
      uri: "storage\/{path}",
      methods: ["GET", "HEAD"],
      wheres: { path: ".*" },
      parameters: ["path"],
    },
  },
};
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
