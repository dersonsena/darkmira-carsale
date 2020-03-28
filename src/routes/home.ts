import TempPage from "../pages/TempPage";
import { IRoute } from "./index";

export enum HOME_ROUTES {
  INDEX = "/home",
  DETAILS = "/offer/:brand/:model/:year/:description"
}

const routes: IRoute[] = [
  {
    path: HOME_ROUTES.INDEX,
    component: TempPage,
    meta: {
      breadcrumb: [{ text: "Ofertas", active: true }]
    }
  },
  {
    path: HOME_ROUTES.DETAILS,
    component: TempPage,
    meta: {
      breadcrumb: [
        { text: "Ofertas", href: "#" },
        { text: "Detalhes Oferta", active: true }
      ]
    }
  }
];

export default routes;
