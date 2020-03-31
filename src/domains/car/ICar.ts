import ICity from "../city/ICity";
import IColor from "../color/IColor";
import IModel from "../model/IModel";
import IBrand from "../brand/IBrand";

export interface ICarPhoto {
  name: string;
  type: string;
  featured: boolean;
  image: string;
  firebaseUrl: string;
  file: File;
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
