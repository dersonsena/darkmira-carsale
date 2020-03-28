import TempPage from "../pages/TempPage";
import { IRoute } from "./index";

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
    component: TempPage,
    meta: {
      breadcrumb: [
        { text: "Administração", href: "#" },
        { text: "Oferta de Carros", href: "#" },
        { text: "Consulta", active: true }
      ]
    }
  },
  {
    path: CAR_ROUTES.CREATE,
    component: TempPage,
    meta: {
      breadcrumb: [
        { text: "Administração", href: "#" },
        { text: "Oferta de Carros", href: "#" },
        { text: "Cadastro", active: true }
      ]
    }
  },
  {
    path: CAR_ROUTES.UPDATE,
    component: TempPage,
    meta: {
      breadcrumb: [
        { text: "Administração", href: "#" },
        { text: "Oferta de Carros", href: "#" },
        { text: "Edição", active: true }
      ]
    }
  },
  {
    path: CAR_ROUTES.SHOW,
    component: TempPage,
    meta: {
      breadcrumb: [
        { text: "Administração", href: "#" },
        { text: "Oferta de Carros", href: "#" },
        { text: "Ficha da Oferta", active: true }
      ]
    }
  }
];

export default routes;
