import TempPage from "../pages/TempPage";
import { IRoute } from "./index";
import lang from "../lang";

export enum HOME_ROUTES {
  INDEX = "/home",
  DETAILS = "/offer/:brand/:model/:year/:description"
}

const routes: IRoute[] = [
  {
    path: HOME_ROUTES.INDEX,
    component: TempPage,
    meta: {
      breadcrumb: [{ text: lang("home.title"), active: true }]
    }
  },
  {
    path: HOME_ROUTES.DETAILS,
    component: TempPage,
    meta: {
      breadcrumb: [
        { text: lang("home.title"), href: "#" },
        { text: lang("home.detailsTitle"), active: true }
      ]
    }
  }
];

export default routes;
