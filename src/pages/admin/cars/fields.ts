import ICar from "../../../domains/car/ICar";

const initialFields: ICar = {
  id: "",
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
  year: "",
  views: 0,
  activated: true
};

export default Object.freeze(initialFields);
