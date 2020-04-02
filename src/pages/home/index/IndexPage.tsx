import React, { useEffect, useState } from "react";
import styles from "./styles";
import IBrand from "../../../domains/brand/IBrand";
import BrandService from "../../../domains/brand/BrandService";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import BrandOffers from "./components/BrandOffers";
import BrandOfferItem from "./components/BrandOffers/BrandOfferItem";
import ICar from "../../../domains/car/ICar";
import CarService from "../../../domains/car/CarService";
import FeaturedOffers from "./components/FeaturedOffers";

const IndexPage = (props: any) => {
  const classes = styles();

  const [brands, setBrands] = useState<IBrand[]>([]);
  const [featuredOffers, setFeaturedOffers] = useState<ICar[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const promises = [
      BrandService.build().getAllByCollection(),
      CarService.build().getFeaturedOffers()
    ];

    setLoading(true);

    Promise.all(promises)
      .then((values: any) => {
        setBrands(values[0]);
        setFeaturedOffers(values[1]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <BrandOffers brands={brands} />
      <FeaturedOffers offers={featuredOffers} />
    </Container>
  );
};

export default IndexPage;
