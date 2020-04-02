import React, { useEffect, useState } from "react";
import styles from "./styles";
import IBrand from "../../../domains/brand/IBrand";
import BrandService from "../../../domains/brand/BrandService";
import Container from "@material-ui/core/Container";
import BrandOffers from "./components/BrandOffers";
import ICar from "../../../domains/car/ICar";
import CarService from "../../../domains/car/CarService";
import FeaturedOffers from "./components/CarGallery";

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
