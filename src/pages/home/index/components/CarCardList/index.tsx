import React, { FC } from "react";
import styles from "./styles";
import ICar from "../../../../../domains/car/ICar";

interface IProps {
  car: ICar;
}

const CarCardList: FC<IProps> = (props: IProps) => {
  const classes = styles();

  return <h1>{props.car.description}</h1>;
};

export default CarCardList;
