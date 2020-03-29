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
      breadcrumb: [{ text: lang("home.title"), to: null }]
    }
  },
  {
    path: HOME_ROUTES.DETAILS,
    component: TempPage,
    meta: {
      breadcrumb: [
        { text: lang("home.title"), to: HOME_ROUTES.INDEX },
        { text: lang("home.detailsTitle"), to: null }
      ]
    }
  }
];

export default routes;
