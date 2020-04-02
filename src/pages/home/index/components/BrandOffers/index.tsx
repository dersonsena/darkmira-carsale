import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IBrand from "../../../../../domains/brand/IBrand";
import styles from "./styles";
import BrandOfferItem from "./BrandOfferItem";

interface IProps {
  brands: IBrand[];
}

const BrandOffers: FC<IProps> = (props: IProps) => {
  const classes = styles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} style={{ paddingTop: 0, paddingBottom: 0 }}>
        <Typography variant="h6" className={classes.sectionTitle} gutterBottom>
          Carros por Marcas
        </Typography>
      </Grid>
      {props.brands.map((brand: IBrand, i: number) => (
        <BrandOfferItem brand={brand} key={i} />
      ))}
    </Grid>
  );
};

export default BrandOffers;
