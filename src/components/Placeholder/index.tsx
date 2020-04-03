import React, { FC } from "react";
import "./style.css";

interface IProps {}

const Placeholder: FC<IProps> = () => {
  return (
    <figure style={{ margin: 0, width: "100%", height: "100%" }}>
      <span className="PlaceHolder">{""}</span>
    </figure>
  );
};

export default Placeholder;
