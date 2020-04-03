import { IRoute } from "./index";
import lang from "../lang";
import IndexPage from "../pages/home/index/IndexPage";
import DetailPage from "../pages/home/details/DetailsPage";

export enum HOME_ROUTES {
  INDEX = "/home",
  DETAILS = "/offer/:brand/:model/:year/:description/:id"
}

const routes: IRoute[] = [
  {
    path: HOME_ROUTES.INDEX,
    component: IndexPage,
    meta: {
      breadcrumb: [{ text: lang("home.title"), to: null }]
    }
  },
  {
    path: HOME_ROUTES.DETAILS,
    component: DetailPage,
    meta: {
      breadcrumb: [
        { text: lang("home.title"), to: HOME_ROUTES.INDEX },
        { text: lang("home.detailsTitle"), to: null }
      ]
    }
  }
];

export default routes;
