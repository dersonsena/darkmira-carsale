import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import SaveIcon from "@material-ui/icons/Save";
import {
  CircularProgress,
  Backdrop,
  IconButton,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  FormControlLabel,
  Switch,
  FormControl,
  InputLabel,
  Input
} from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import CarService from "../../../domains/car/CarService";
import BrandService from "../../../domains/brand/BrandService";
import CityService from "../../../domains/city/CityService";
import ColorService from "../../../domains/color/ColorService";
import Breadcrumb from "../../../components/Breadcrumb";
import { CAR_ROUTES } from "../../../routes/cars";
import styles from "./styles";
import initialFields from "./fields";
import IBrand from "../../../domains/brand/IBrand";
import IColor from "../../../domains/color/IColor";
import ICity from "../../../domains/city/ICity";
import IModel from "../../../domains/model/IModel";
import ICar, { ICarPhoto } from "../../../domains/car/ICar";
import { slug } from "../../../core/utils";

const yearsOptions = (numberYears: number = 20): number[] => {
  const currentYear: number = new Date().getFullYear();
  const limit: number = currentYear - numberYears;
  const yearList: number[] = [];

  for (let i = currentYear; i >= limit; i -= 1) {
    yearList.push(i);
  }

  return yearList;
};

const CreatePage = (props: any) => {
  const classes = styles();
  const [fields, setFields] = useState<ICar>(initialFields);
  const [brands, setBrands] = useState<IBrand[]>([]);
  const [models, setModels] = useState<IModel[]>([]);
  const [colors, setColors] = useState<IColor[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const promises = [
      BrandService.build().getAllByCollection(),
      CityService.build().getAllByCollection(),
      ColorService.build().getAllByCollection()
    ];

    setLoading(true);

    Promise.all(promises)
      .then((values: any) => {
        const brandList: IBrand[] = values[0];
        const cityList: ICity[] = values[1];
        const colorList: IColor[] = values[2];

        setBrands(brandList);
        setCities(cityList);
        setColors(colorList);
      })
      .finally(() => setLoading(false));
  }, []);

  yearsOptions();

  const handleChange = (event: any) => {
    const auxValues: ICar = { ...fields };
    const name: keyof ICar = event.target.name;
    const type: string = event.target.type;
    let value: any = event.target.value;

    if (type === "number") {
      value = parseInt(value, 10);
    }

    auxValues[name] = value;

    setFields(auxValues);
  };

  const handleChangeSelect = (event: any) => {
    const auxValues: any = { ...fields };
    const name: keyof ICar = event.target.name;
    const value: string = event.target.value;

    if (value === "") {
      auxValues[name] = initialFields[name];

      if (name === "brand") {
        auxValues.model = initialFields.model;
      }

      setFields(auxValues);
      return true;
    }

    let collection = [];

    switch (name) {
      case "brand":
        collection = brands;
        break;
      case "color":
        collection = colors;
        break;
      case "city":
        collection = cities;
        break;
      case "model":
        collection = models;
        break;
      default:
        return true;
    }

    const selected: any = collection.find((row: any) => row.id === value);

    if (Object.prototype.hasOwnProperty.call(selected, "models")) {
      setModels(selected.models);
    }

    auxValues[name] = selected;
    setFields(auxValues);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setLoading(true);

    const newFields: ICar = {
      ...fields,
      slug: slug(fields.description)
    };

    delete newFields.brand.models;

    CarService.build()
      .insert(newFields)
      .then(docId => {
        props.history.push(CAR_ROUTES.INDEX, {
          snackMessage: "A oferta de carro foi salva com sucesso",
          snackSeverity: "success"
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCapture = (event: any) => {
    const auxValues: ICar = { ...fields };
    const selectedFiles = event.target.files;

    for (let i = 0; i < selectedFiles.length; i += 1) {
      const fileReader = new FileReader();
      const file = selectedFiles[i];

      fileReader.readAsDataURL(file);

      fileReader.onload = (e: any) => {
        auxValues.photos.push({
          name: file.name,
          image: e.target.result,
          featured: false
        });
        setTimeout(() => setFields(auxValues), 100);
      };
    }

    setTimeout(() => {
      auxValues.photos[0].featured = true;
      setFields(auxValues);
    }, 100);
  };

  const handleToggleFeatured = (index: number) => (event: any) => {
    const newFields = { ...fields };

    const newPhotos = newFields.photos.map((photo: any) => {
      photo.featured = false;
      return photo;
    });

    newPhotos[index].featured = true;
    newFields.photos = newPhotos;

    setFields(newFields);
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Backdrop style={{ zIndex: 1, color: "#fff" }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Breadcrumb data={props.meta.breadcrumb} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={classes.paperForm}>
            <form onSubmit={handleSubmit} noValidate>
              <div className={classes.formContainer}>
                <TextField
                  label="Descrição"
                  name="description"
                  onChange={handleChange}
                  style={{ margin: 10 }}
                  fullWidth
                  required
                  className={classes.textField}
                  variant="outlined"
                />

                <div>
                  <TextField
                    label="Placa"
                    name="board"
                    required
                    placeholder="Ex: AAA-9999"
                    value={fields.board}
                    onChange={handleChange}
                    style={{ margin: 10 }}
                    className={classes.textField}
                    variant="outlined"
                  />
                  <TextField
                    label="Quilometragem"
                    name="mileage"
                    type="number"
                    required
                    onChange={handleChange}
                    style={{ margin: 10 }}
                    className={classes.textField}
                    variant="outlined"
                  />
                  <TextField
                    select
                    label="Ano"
                    name="year"
                    value={fields.year}
                    required
                    onChange={handleChange}
                    style={{ margin: 10 }}
                    className={classes.textField}
                    variant="outlined"
                  >
                    <MenuItem value="">:: Selecione ::</MenuItem>
                    {yearsOptions().map((year: number) => (
                      <MenuItem key={year} value={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    label="Preço"
                    name="price"
                    required
                    onChange={handleChange}
                    style={{ margin: 10 }}
                    className={classes.textField}
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    select
                    name="brand"
                    label="Marca"
                    required
                    value={fields.brand.id}
                    onChange={handleChangeSelect}
                    style={{ margin: 10 }}
                    className={classes.textField}
                    variant="outlined"
                  >
                    <MenuItem value="">:: Selecione ::</MenuItem>
                    {brands.map((row: any, i: number) => (
                      <MenuItem key={i} value={row.id}>
                        {row.name}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    select
                    label="Modelo"
                    name="model"
                    required
                    value={fields.model.id}
                    onChange={handleChangeSelect}
                    style={{ margin: 10 }}
                    className={classes.textField}
                    disabled={fields.brand.id === ""}
                    variant="outlined"
                  >
                    <MenuItem value="">:: Selecione ::</MenuItem>
                    {models.map((row: any, i: number) => (
                      <MenuItem key={i} value={row.id}>
                        {row.name}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    select
                    name="color"
                    required
                    value={fields.color.id}
                    onChange={handleChangeSelect}
                    label="Cor"
                    style={{ margin: 10 }}
                    className={classes.textField}
                    variant="outlined"
                  >
                    <MenuItem value="">:: Selecione ::</MenuItem>
                    {colors.map((row: any, i: number) => (
                      <MenuItem key={i} value={row.id}>
                        {row.name}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    select
                    name="city"
                    required
                    value={fields.city.id}
                    onChange={handleChangeSelect}
                    label="Cidade"
                    style={{ margin: 10 }}
                    className={classes.textField}
                    variant="outlined"
                  >
                    <MenuItem value="">:: Selecione ::</MenuItem>
                    {cities.map((row: any, i: number) => (
                      <MenuItem key={i} value={row.id}>
                        {row.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </div>
              <div>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12} lg={12}>
                    <Button
                      style={{ margin: 10 }}
                      variant="contained"
                      component="label"
                      onChange={handleCapture}
                    >
                      <AddPhotoAlternateIcon />
                      Selecionar Fotos da Oferta
                      <Input
                        value=""
                        name="photos"
                        type="file"
                        style={{ display: "none" }}
                        inputProps={{
                          accept: "image/*",
                          multiple: true
                        }}
                      />
                    </Button>
                  </Grid>
                  {fields.photos.map((photo, i: number) => (
                    <Grid key={i} item xs={3} md={3} lg={3}>
                      <Card key={i} className={classes.card}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={photo.image}
                            title="Title"
                          />
                        </CardActionArea>
                        <CardContent>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {photo.name}

                            <FormControlLabel
                              control={
                                <Switch
                                  checked={photo.featured}
                                  onChange={handleToggleFeatured(i)}
                                  name={`photo-${i}`}
                                  color="primary"
                                />
                              }
                              label="Foto Destaque"
                            />
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </div>

              <div>
                <Button
                  variant="contained"
                  type="submit"
                  style={{ margin: 10 }}
                  color="primary"
                  onClick={() => props.history.push(CAR_ROUTES.CREATE)}
                  startIcon={<SaveIcon />}
                >
                  Salvar
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreatePage;
