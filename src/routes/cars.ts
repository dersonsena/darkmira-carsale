import { IRoute } from "./index";
import { SCOPES } from "./scopes";
import lang from "../lang";
import IndexPage from "../pages/admin/cars/IndexPage";
import FormPage from "../pages/admin/cars/FormPage";
import DetailPage from "../pages/admin/cars/DetailPage";

export enum CAR_ROUTES {
  INDEX = "/admin/car",
  CREATE = "/admin/car/create",
  UPDATE = "/admin/car/update/:id",
  DETAILS = "/admin/car/details/:id",
  DELETE = "/admin/car/delete/:id"
}

const routes: IRoute[] = [
  {
    path: CAR_ROUTES.INDEX,
    component: IndexPage,
    meta: {
      scope: null,
      breadcrumb: [
        { text: lang("admin.title"), to: CAR_ROUTES.INDEX },
        { text: lang("cars.title"), to: CAR_ROUTES.INDEX },
        { text: lang("general.gridTitle"), to: null }
      ]
    }
  },
  {
    path: CAR_ROUTES.CREATE,
    component: FormPage,
    meta: {
      scope: SCOPES.CREATE,
      breadcrumb: [
        { text: lang("admin.title"), to: CAR_ROUTES.INDEX },
        { text: lang("cars.title"), to: CAR_ROUTES.INDEX },
        { text: lang("general.addTitle"), to: null }
      ]
    }
  },
  {
    path: CAR_ROUTES.UPDATE,
    component: FormPage,
    meta: {
      scope: SCOPES.UPDATE,
      breadcrumb: [
        { text: lang("admin.title"), to: CAR_ROUTES.INDEX },
        { text: lang("cars.title"), to: CAR_ROUTES.INDEX },
        { text: lang("general.updateTitle"), to: null }
      ]
    }
  },
  {
    path: CAR_ROUTES.DELETE,
    component: IndexPage,
    meta: {}
  },
  {
    path: CAR_ROUTES.DETAILS,
    component: DetailPage,
    meta: {
      scope: null,
      breadcrumb: [
        { text: lang("admin.title"), to: CAR_ROUTES.INDEX },
        { text: lang("cars.title"), to: CAR_ROUTES.INDEX },
        { text: lang("cars.showTitle"), to: null }
      ]
    }
  }
];

export default routes;
