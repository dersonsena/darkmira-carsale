import { FC } from "react";
import homeRoutes from "./home";
import carRoutes from "./cars";

export interface IRoute {
  path: string;
  component: FC;
  meta: object;
}

const allRoutes = homeRoutes.concat(carRoutes);

export default allRoutes;
