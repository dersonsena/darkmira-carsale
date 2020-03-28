import TempPage from "../pages/TempPage";
import { IRoute } from "./index";
import lang from "../lang";
import CarIndexPage from "../pages/admin/cars";

export enum CAR_ROUTES {
  INDEX = "/admin/car",
  CREATE = "/admin/car/create",
  UPDATE = "/admin/car/update/:id",
  SHOW = "/admin/car/show/:id",
  DELETE = "/admin/car/delete/:id"
}

const routes: IRoute[] = [
  {
    path: CAR_ROUTES.INDEX,
    component: CarIndexPage,
    meta: {
      breadcrumb: [
        { text: lang("admin.title"), href: "#" },
        { text: lang("cars.title"), href: "#" },
        { text: lang("general.gridTitle"), active: true }
      ]
    }
  },
  {
    path: CAR_ROUTES.CREATE,
    component: TempPage,
    meta: {
      breadcrumb: [
        { text: lang("admin.title"), href: "#" },
        { text: lang("cars.title"), href: "#" },
        { text: lang("general.addTitle"), active: true }
      ]
    }
  },
  {
    path: CAR_ROUTES.UPDATE,
    component: TempPage,
    meta: {
      breadcrumb: [
        { text: lang("admin.title"), href: "#" },
        { text: lang("cars.title"), href: "#" },
        { text: lang("general.updateTitle"), active: true }
      ]
    }
  },
  {
    path: CAR_ROUTES.DELETE,
    component: TempPage,
    meta: {}
  },
  {
    path: CAR_ROUTES.SHOW,
    component: TempPage,
    meta: {
      breadcrumb: [
        { text: lang("admin.title"), href: "#" },
        { text: lang("cars.title"), href: "#" },
        { text: lang("cars.showTitle"), active: true }
      ]
    }
  }
];

export default routes;
