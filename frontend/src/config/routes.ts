import * as Pages from "../pages";

export interface IRoute {
  name: string;
  path: string;
  exact: boolean;
  component: any;
  protected: boolean;
}

const routes: IRoute[] = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: Pages.Home,
    protected: true,
  },
  {
    name: "register",
    path: "/register",
    exact: true,
    component: Pages.Registration,
    protected: false,
  },
  {
    name: "login",
    path: "/login",
    exact: true,
    component: Pages.Login,
    protected: false,
  },
  {
    name: "chat",
    path: "/chat/:id",
    exact: true,
    component: Pages.Chat,
    protected: true,
  },
];

export { routes };
