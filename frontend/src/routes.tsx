import type { RouteObject } from "react-router";

import { App } from "./App";
import { HomePage, LoginPage, RegisterPage, ShopPage } from "./pages";

export const appRoutes: RouteObject[] = [
  {
    Component: App,
    children: [
      { index: true, Component: HomePage },
      { path: "login", Component: LoginPage },
      { path: "register", Component: RegisterPage },
      { path: "shop", Component: ShopPage },
    ],
  },
];
