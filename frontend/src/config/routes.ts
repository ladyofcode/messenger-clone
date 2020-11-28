import * as Pages from "../pages";
import ChatWindow from "../layouts/ChatWindow/ChatWindow";

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
    name: "window",
    path: "/window",
    exact: true,
    component: ChatWindow,
  },
];

export { routes };
