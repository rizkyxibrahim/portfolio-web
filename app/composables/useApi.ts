import { useCookie, useRuntimeConfig } from "nuxt/app";

export const useApi = () => {
  const config = useRuntimeConfig();
  const token = useCookie("xibra_token");

  const fetchApi = async (
    path: string,
    options: Parameters<typeof $fetch>[1] = {},
  ) => {
    const headers: Record<string, string> = {
      Accept: "application/json",
      ...((options.headers as Record<string, string>) || {}),
    };

    if (token.value) {
      headers["Authorization"] = `Bearer ${token.value}`;
    }

    return $fetch(`${config.public.apiBase}${path}`, {
      ...options,
      headers,
    });
  };

  return { fetchApi };
};
