interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

export default {
  fetch(request: Request, env: Env) {
    const url = new URL(request.url);
    if (url.pathname === '/') {
      return Response.redirect(`${url.origin}/home`, 302);
    }
    return env.ASSETS.fetch(request);
  },
};
