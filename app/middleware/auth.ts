import { defineNuxtRouteMiddleware, navigateTo, useCookie } from "#imports";

export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie("xibra_token");

  // Halaman publik tidak memerlukan auth
  const publicPaths = [
    "/",
    "/login",
    "/about",
    "/projects",
    "/contact",
    "/blog",
  ];
  const isPublic = publicPaths.some(
    (p) => to.path === p || to.path.startsWith(p + "/"),
  );
  if (isPublic) {
    return;
  }

  // Halaman privat memerlukan token
  if (!token.value) {
    return navigateTo("/login");
  }
});
