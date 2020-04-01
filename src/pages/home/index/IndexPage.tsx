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

const IndexPage = (props: any) => {
  const classes = styles();

  const [brands, setBrands] = useState<IBrand[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const promises = [BrandService.build().getAllByCollection()];

    setLoading(true);

    Promise.all(promises)
      .then((values: any) => {
        setBrands(values[0]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ paddingTop: 0, paddingBottom: 0 }}>
          <Typography
            variant="h6"
            className={classes.sectionTitle}
            gutterBottom
          >
            Carros por Marcas
          </Typography>
        </Grid>
        {brands.map((brand: IBrand, i: number) => (
          <Grid key={i} item xs={6} sm={4} md={2} lg={2}>
            <Card className={classes.brandsCardContainer}>
              <CardActionArea>
                <CardMedia
                  style={{ height: 90, backgroundSize: "auto" }}
                  image={brand.logoUrl}
                  title={`Ver as oferta da marca ${brand.name}`}
                />
                <CardContent>
                  <Divider />
                  <Typography
                    className={classes.brandName}
                    align="center"
                    variant="h5"
                    component="h2"
                  >
                    {brand.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default IndexPage;
