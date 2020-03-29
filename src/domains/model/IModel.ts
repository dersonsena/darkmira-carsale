import IBrand from "../brand/IBrand";

export default interface IModel {
  id: string | number;
  brand: IBrand;
  name: string;
  slug: string;
}
