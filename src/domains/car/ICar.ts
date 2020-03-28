import ICity from "../city/ICity";
import IColor from "../color/IColor";
import IModel from "../model/IModel";

export interface ICarPhoto {
  id: string | number;
  featured: boolean;
  imageUrl: string;
}

export default interface ICar {
  id: string | number;
  board: string;
  city: ICity;
  color: IColor;
  createdAt: Date;
  description: string;
  mileage: number;
  model: IModel;
  price: number;
  slug: string;
  year: number;
  photos: ICarPhoto[];
}
