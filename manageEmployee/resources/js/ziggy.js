const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"login":{"uri":"login","methods":["GET","HEAD"]},"register":{"uri":"register","methods":["GET","HEAD"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"],"parameters":["token"]},"password.update":{"uri":"reset-password","methods":["POST"]},"logout":{"uri":"logout","methods":["POST"]},"admin.dashboard":{"uri":"admin\/dashboard","methods":["GET","HEAD"]},"employer.dashboard":{"uri":"employer\/dashboard","methods":["GET","HEAD"]},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
