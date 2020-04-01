import React, { useState, useEffect } from "react";
import {
  Container,
  Backdrop,
  CircularProgress,
  Grid,
  Paper,
  Typography,
  Divider
} from "@material-ui/core";
import styles from "./styles";
import Breadcrumb from "../../../components/Breadcrumb";
import CarService from "../../../domains/car/CarService";
import ICar from "../../../domains/car/ICar";
import initialFields from "./fields";
import CarGallery from "../../../domains/car/components/CarGallery";

const DetailPage = (props: any) => {
  const classes = styles();

  const [loading, setLoading] = useState(false);
  const [car, setCar] = useState<ICar>(initialFields);

  useEffect(() => {
    const carId: string = props.match.params.id;

    setLoading(true);

    CarService.build()
      .getById(carId)
      .then((document: ICar) => setCar(document))
      .finally(() => setLoading(false));
  }, [props.match.params.id]);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Backdrop style={{ zIndex: 1, color: "#fff" }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Breadcrumb data={props.meta.breadcrumb} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={classes.paperForm}>
            <header className={classes.detailHeader}>
              <div className={classes.brandInfo}>
                <Typography className={classes.brandName} variant="h4">
                  {car.brand.name}
                </Typography>
                <Typography
                  color="secondary"
                  className={classes.modelName}
                  variant="h4"
                >
                  {car.model.name.toUpperCase()}
                </Typography>
              </div>
              <Typography
                className={classes.carDescription}
                variant="subtitle1"
                gutterBottom
              >
                {car.description}
              </Typography>
            </header>
            <Divider light={true} />
            <section className={classes.infoContainer}>
              <Grid container spacing={3}>
                <Grid item xs={4} md={4} lg={4}>
                  <small>Ano</small>
                  <Typography variant="h6">{car.year}</Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                  <small>KM</small>
                  <Typography variant="h6">{car.mileage}</Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                  <small>Cidade</small>
                  <Typography variant="h6">{car.city.name}</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={4} md={4} lg={4}>
                  <small>Cor</small>
                  <Typography variant="h6">{car.color.name}</Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                  <small>Preço</small>
                  <Typography variant="h6">R$ {car.price}</Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                  <small>Placa</small>
                  <Typography variant="h6">{car.board}</Typography>
                </Grid>
              </Grid>
            </section>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={classes.paperForm}>
            <Grid container spacing={3}>
              <CarGallery
                showActions={false}
                disableFeature={true}
                photos={car.photos}
              />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailPage;
