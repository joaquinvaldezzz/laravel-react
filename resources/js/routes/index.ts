import type { RouteDefinition, RouteFormDefinition, RouteQueryOptions } from "./../wayfinder";

import { queryParams } from "./../wayfinder";

/**
 * @see routes/web.php:6
 * @route '/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<"get"> => ({
  url: home.url(options),
  method: "get",
});

home.definition = {
  methods: ["get", "head"],
  url: "/",
} satisfies RouteDefinition<["get", "head"]>;

/**
 * @see routes/web.php:6
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
  return home.definition.url + queryParams(options);
};

/**
 * @see routes/web.php:6
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<"get"> => ({
  url: home.url(options),
  method: "get",
});

/**
 * @see routes/web.php:6
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<"head"> => ({
  url: home.url(options),
  method: "head",
});

/**
 * @see routes/web.php:6
 * @route '/'
 */
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<"get"> => ({
  action: home.url(options),
  method: "get",
});

/**
 * @see routes/web.php:6
 * @route '/'
 */
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<"get"> => ({
  action: home.url(options),
  method: "get",
});

/**
 * @see routes/web.php:6
 * @route '/'
 */
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<"get"> => ({
  action: home.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...(options?.query ?? options?.mergeQuery ?? {}),
    },
  }),
  method: "get",
});

home.form = homeForm;

/**
 * @see routes/web.php:10
 * @route '/about'
 */
export const about = (options?: RouteQueryOptions): RouteDefinition<"get"> => ({
  url: about.url(options),
  method: "get",
});

about.definition = {
  methods: ["get", "head"],
  url: "/about",
} satisfies RouteDefinition<["get", "head"]>;

/**
 * @see routes/web.php:10
 * @route '/about'
 */
about.url = (options?: RouteQueryOptions) => {
  return about.definition.url + queryParams(options);
};

/**
 * @see routes/web.php:10
 * @route '/about'
 */
about.get = (options?: RouteQueryOptions): RouteDefinition<"get"> => ({
  url: about.url(options),
  method: "get",
});

/**
 * @see routes/web.php:10
 * @route '/about'
 */
about.head = (options?: RouteQueryOptions): RouteDefinition<"head"> => ({
  url: about.url(options),
  method: "head",
});

/**
 * @see routes/web.php:10
 * @route '/about'
 */
const aboutForm = (options?: RouteQueryOptions): RouteFormDefinition<"get"> => ({
  action: about.url(options),
  method: "get",
});

/**
 * @see routes/web.php:10
 * @route '/about'
 */
aboutForm.get = (options?: RouteQueryOptions): RouteFormDefinition<"get"> => ({
  action: about.url(options),
  method: "get",
});

/**
 * @see routes/web.php:10
 * @route '/about'
 */
aboutForm.head = (options?: RouteQueryOptions): RouteFormDefinition<"get"> => ({
  action: about.url({
    [options?.mergeQuery ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...(options?.query ?? options?.mergeQuery ?? {}),
    },
  }),
  method: "get",
});

about.form = aboutForm;
