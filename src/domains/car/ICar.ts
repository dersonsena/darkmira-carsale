import ICity from "../city/ICity";
import IColor from "../color/IColor";
import IModel from "../model/IModel";
import IBrand from "../brand/IBrand";

export interface ICarPhoto {
  id: string | number;
  featured: boolean;
  imageUrl: string;
}

export default interface ICar {
  id: string | number;
  board: string;
  brand: IBrand;
  city: ICity;
  color: IColor;
  createdAt: Date;
  description: string;
  mileage: string | number;
  model: IModel;
  price: string | number;
  slug: string;
  year: string | number;
  photos: ICarPhoto[];
}
