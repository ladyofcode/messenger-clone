import * as Pages from "../pages";
import ChatWindow from "../layouts/ChatWindow/ChatWindow";

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
    name: "window",
    path: "/window",
    exact: true,
    component: ChatWindow,
  },
];

export { routes };
