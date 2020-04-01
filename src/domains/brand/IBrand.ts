import IModel from "../model/IModel";

export default interface IBrand {
  id: string | number;
  logoUrl: string;
  name: string;
  slug: string;
  models?: IModel[];
}
