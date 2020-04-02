import React, { FC } from "react";
import ICar from "../../../../../domains/car/ICar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CarCard from "../CarCard";
import styles from "./styles";

interface IProps {
  offers: ICar[];
}

const FeaturedOffers: FC<IProps> = (props: IProps) => {
  const classes = styles();

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={12} style={{ paddingTop: 0, paddingBottom: 0 }}>
        <Typography variant="h6" className={classes.sectionTitle} gutterBottom>
          Ofertas em Destaque
        </Typography>
      </Grid>
      {props.offers.map((car: ICar, i: number) => (
        <Grid key={i} item xs={6} sm={4} md={3} lg={3}>
          <CarCard car={car} key={i} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturedOffers;
