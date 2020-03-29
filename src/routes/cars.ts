import TempPage from "../pages/TempPage";
import { IRoute } from "./index";
import lang from "../lang";
import CarIndexPage from "../pages/admin/cars";
import CreatePage from "../pages/admin/cars/CreatePage";

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
        { text: lang("admin.title"), to: CAR_ROUTES.INDEX },
        { text: lang("cars.title"), to: CAR_ROUTES.INDEX },
        { text: lang("general.gridTitle"), to: null }
      ]
    }
  },
  {
    path: CAR_ROUTES.CREATE,
    component: CreatePage,
    meta: {
      breadcrumb: [
        { text: lang("admin.title"), to: CAR_ROUTES.INDEX },
        { text: lang("cars.title"), to: CAR_ROUTES.INDEX },
        { text: lang("general.addTitle"), to: null }
      ]
    }
  },
  {
    path: CAR_ROUTES.UPDATE,
    component: TempPage,
    meta: {
      breadcrumb: [
        { text: lang("admin.title"), to: CAR_ROUTES.INDEX },
        { text: lang("cars.title"), to: CAR_ROUTES.INDEX },
        { text: lang("general.updateTitle"), to: null }
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
        { text: lang("admin.title"), to: CAR_ROUTES.INDEX },
        { text: lang("cars.title"), to: CAR_ROUTES.INDEX },
        { text: lang("cars.showTitle"), to: null }
      ]
    }
  }
];

export default routes;
