const Ziggy = {"url":"http:\/\/localhost:8000","port":8000,"defaults":{},"routes":{"home":{"uri":"\/","methods":["GET","HEAD"]},"about":{"uri":"about","methods":["GET","HEAD"]},"posts.store":{"uri":"posts","methods":["POST"]},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
