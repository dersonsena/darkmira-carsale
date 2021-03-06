import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IBrand from "../../../../../domains/brand/IBrand";
import styles from "./styles";
import BrandOfferItem from "./BrandOfferItem";
import FakeBrandCard from "../FakeBrandCard";
import lang from "../../../../../lang";

interface IProps {
  brands: IBrand[];
  loading: boolean;
}

const BrandOffers: FC<IProps> = (props: IProps) => {
  const classes = styles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} style={{ paddingTop: 0, paddingBottom: 0 }}>
        <Typography variant="h6" className={classes.sectionTitle} gutterBottom>
          {lang("home.brandTitle")}
        </Typography>
      </Grid>
      {props.loading
        ? Array.from({ length: 6 }, (v: number, k: number) => (
            <Grid key={k} item xs={6} sm={4} md={2} lg={2}>
              <FakeBrandCard />
            </Grid>
          ))
        : props.brands.map((brand: IBrand, i: number) => (
            <BrandOfferItem brand={brand} key={i} />
          ))}
    </Grid>
  );
};

export default BrandOffers;
