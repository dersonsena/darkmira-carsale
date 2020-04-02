import React, { useEffect, useState } from "react";
import styles from "./styles";
import Breadcrumb, { IBreadcrumbItem } from "../../../components/Breadcrumb";
import Container from "@material-ui/core/Container";
import { Backdrop, CircularProgress, Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import lang from "../../../lang";
import ICar, { ICarPhoto } from "../../../domains/car/ICar";
import initialFields from "../../admin/cars/fields";
import CarService from "../../../domains/car/CarService";
import { currencyFormat } from "../../../core/utils";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Image from "material-ui-image";
import Lightbox from "react-image-lightbox";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

const DetailsPage = (props: any) => {
  const classes = styles();
  const [loading, setLoading] = useState(false);
  const [car, setCar] = useState<ICar>(initialFields);
  const [breadcrumbItems, setBreadcrumbItems] = useState<IBreadcrumbItem[]>([]);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentIndexPhoto, setCurrentIndexPhoto] = useState(0);
  const [imageUrlList, setImageUrlList] = useState([]);

  useEffect(() => {
    const carId = "zWZVtFdNdOHYq0nlUhbR";

    setLoading(true);

    CarService.build()
      .getById(carId)
      .then(document => {
        setCar(document);
        setBreadcrumbItems([
          { text: document.brand.name, to: null },
          { text: document.model.name, to: null },
          { text: document.description, to: null }
        ]);

        const images = document.photos.map(
          (photo: ICarPhoto) => photo.firebaseUrl
        );
        setImageUrlList(images);
      })
      .finally(() => setLoading(false));
  }, [props.match.params.id]);

  const handleOnClickPhoto = (
    event: React.MouseEvent,
    index: number,
    photo: ICarPhoto
  ) => {
    setCurrentIndexPhoto(index);
    setLightboxIsOpen(true);
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Backdrop style={{ zIndex: 1, color: "#fff" }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Breadcrumb appendItems={breadcrumbItems} data={props.meta.breadcrumb} />

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Paper className={classes.paperContainer}>
            <header className={classes.headerContainer}>
              <Typography className={classes.headerTitles} variant="h4">
                {car.brand.name ? (
                  car.brand.name
                ) : (
                  <CircularProgress size={20} />
                )}
              </Typography>
              <Typography
                className={classes.headerTitles}
                color="secondary"
                variant="h4"
              >
                {car.model.name ? (
                  car.model.name
                ) : (
                  <CircularProgress size={20} />
                )}
              </Typography>
            </header>
            <Typography variant="body1" className={classes.description}>
              {car.description ? (
                car.description
              ) : (
                <CircularProgress size={20} />
              )}
            </Typography>
            <section className={classes.carDetails}>
              <Grid container spacing={3}>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                  <small>{lang("cars.entity.year")}</small>
                  <Typography variant="h6" className={classes.detailValues}>
                    {car.year ? car.year : <CircularProgress size={20} />}
                  </Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                  <small>{lang("cars.entity.mileage")}</small>
                  <Typography variant="h6" className={classes.detailValues}>
                    {car.mileage ? (
                      currencyFormat(car.mileage, 0) + " KM"
                    ) : (
                      <CircularProgress size={20} />
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                  <small>{lang("cars.entity.city")}</small>
                  <Typography variant="h6" className={classes.detailValues}>
                    {car.city.name ? (
                      car.city.name
                    ) : (
                      <CircularProgress size={20} />
                    )}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                  <small>{lang("cars.entity.color")}</small>
                  <Typography variant="h6" className={classes.detailValues}>
                    {car.color.name ? (
                      car.color.name
                    ) : (
                      <CircularProgress size={20} />
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                  <small>{lang("cars.entity.board")}</small>
                  <Typography variant="h6" className={classes.detailValues}>
                    {car.board ? car.board : <CircularProgress size={20} />}
                  </Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                  <small>Visualizações</small>
                  <Typography variant="h6" className={classes.detailValues}>
                    110
                  </Typography>
                </Grid>
              </Grid>
            </section>
            <section className={classes.photosContainer}>
              {lightboxIsOpen && (
                <Lightbox
                  animationOnKeyInput={true}
                  animationDuration={500}
                  mainSrc={imageUrlList[currentIndexPhoto]}
                  nextSrc={
                    imageUrlList[(currentIndexPhoto + 1) % imageUrlList.length]
                  }
                  prevSrc={
                    imageUrlList[
                      (currentIndexPhoto + imageUrlList.length - 1) %
                        imageUrlList.length
                    ]
                  }
                  onCloseRequest={() => setLightboxIsOpen(false)}
                  onMovePrevRequest={() =>
                    setCurrentIndexPhoto(
                      (currentIndexPhoto + imageUrlList.length - 1) %
                        imageUrlList.length
                    )
                  }
                  onMoveNextRequest={() =>
                    setCurrentIndexPhoto(
                      (currentIndexPhoto + 1) % imageUrlList.length
                    )
                  }
                />
              )}
              <Grid container spacing={3}>
                {car.photos.map((photo, i) => (
                  <Grid key={i} item xs={12} sm={12} md={4} lg={4}>
                    <Card>
                      <CardActionArea
                        onClick={e => handleOnClickPhoto(e, i, photo)}
                      >
                        <Image
                          imageStyle={{
                            width: "auto",
                            maxHeight: "100%",
                            left: "-8%"
                          }}
                          src={photo.firebaseUrl}
                          color="#eee"
                          animationDuration={4000}
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </section>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Paper className={classes.paperContainer}>
            <Typography variant="h3" className={classes.price}>
              R$ {currencyFormat(car.price, 0)}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Gosto desse carro? Envie uma mensagem ao vendedor
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
                label="Seu nome:"
                variant="outlined"
                fullWidth
                required
                style={{ marginBottom: 15 }}
              />
              <TextField
                label="Seu e-mail:"
                placeholder="user@domail.com.br"
                variant="outlined"
                fullWidth
                required
                style={{ marginBottom: 15 }}
              />
              <TextField
                label="Seu telefone:"
                placeholder="(99) 9.9999-9999"
                variant="outlined"
                fullWidth
                required
                style={{ marginBottom: 15 }}
              />
              <TextField
                label="Seu telefone:"
                defaultValue={`Olá, tenho interesse nesse veículo. Por favor entre em contato comigo para negociarmos.`}
                variant="outlined"
                multiline
                fullWidth
                required
                rows={8}
                style={{ marginBottom: 15 }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                endIcon={<Icon>send</Icon>}
              >
                Enviar
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailsPage;
