import { Typography } from "@material-ui/core";
import React from "react";
import styles from "./styles";
import lang from "../../../../lang";

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
      {lang("cars.form.featuredPhoto")}:{" "}
      {props.photo.featured ? lang("general.yes") : lang("general.no")}
    </Typography>
  );
};

export default LabelFeatured;
