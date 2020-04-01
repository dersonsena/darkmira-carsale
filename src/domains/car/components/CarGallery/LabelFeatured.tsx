import styles from "./styles";
import { Typography } from "@material-ui/core";
import React from "react";

const LabelFeatured = (props: any) => {
  const color = props.photo.featured ? "primary" : "initial";
  const classes = styles();

  return (
    <Typography
      variant="body1"
      color={color}
      className={classes.featuredLabel}
      gutterBottom
    >
      Destaque: {props.photo.featured ? "SIM" : "NÃO"}
    </Typography>
  );
};

export default LabelFeatured;
