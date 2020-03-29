import IBrand from "../../../domains/brand/IBrand";
import ICity from "../../../domains/city/ICity";
import IColor from "../../../domains/color/IColor";
import IModel from "../../../domains/model/IModel";

export interface ICarFields {
  board: string;
  brand: IBrand;
  city: ICity;
  color: IColor;
  createdAt: Date;
  description: string;
  mileage: number | string;
  model: IModel;
  photos: any[];
  price: number | string;
  slug: string;
  year: number | string;
}

const initialFields: ICarFields = {
  board: "",
  brand: { id: "", name: "", slug: "", logoUrl: "", models: [] },
  city: { id: "", name: "", slug: "" },
  color: { id: "", name: "", slug: "" },
  createdAt: new Date(),
  description: "",
  mileage: "",
  model: {
    id: "",
    name: "",
    slug: ""
  },
  photos: [],
  price: "",
  slug: "",
  year: ""
};

export default initialFields;
