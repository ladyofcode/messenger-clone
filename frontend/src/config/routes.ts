import * as Pages from "../pages";

export interface IRoute {
  name: string;
  path: string;
  exact: boolean;
  component: any;
}

const routes: IRoute[] = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: Pages.Home,
  },
  {
    name: "register",
    path: "/register",
    exact: true,
    component: Pages.Registration,
  },
  {
    name: "login",
    path: "/login",
    exact: true,
    component: Pages.Login,
  },
];

export { routes };
