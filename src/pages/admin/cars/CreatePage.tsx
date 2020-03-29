import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import SaveIcon from "@material-ui/icons/Save";
import { CircularProgress, Backdrop } from "@material-ui/core";
import CarService from "../../../domains/car/CarService";
import BrandService from "../../../domains/brand/BrandService";
import CityService from "../../../domains/city/CityService";
import ColorService from "../../../domains/color/ColorService";
import Breadcrumb from "../../../components/Breadcrumb";
import { CAR_ROUTES } from "../../../routes/cars";
import styles from "./styles";
import initialFields, { ICarFields } from "./fields";
import IBrand from "../../../domains/brand/IBrand";
import IColor from "../../../domains/color/IColor";
import ICity from "../../../domains/city/ICity";
import IModel from "../../../domains/model/IModel";

const CreatePage = (props: any) => {
  const classes = styles();
  const [fields, setFields] = useState<ICarFields>(initialFields);
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState<IBrand[]>([]);
  const [models, setModels] = useState<IModel[]>([]);
  const [colors, setColors] = useState<IColor[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);

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

  const handleChange = (event: any) => {
    const auxValues: any = { ...fields };
    auxValues[event.target.name] = event.target.value;
    setFields(auxValues);
  };

  const handleChangeSelect = (event: any) => {
    const auxValues: any = { ...fields };
    const name: keyof ICarFields = event.target.name;
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
    console.log(fields);

    CarService.build()
      .insert(fields)
      .then(docId => {
        console.log(docId);
      })
      .finally(() => {
        setLoading(false);
      });

    setLoading(false);
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
            <form onSubmit={handleSubmit}>
              <div className={classes.formContainer}>
                <TextField
                  label="Descrição"
                  name="description"
                  onChange={handleChange}
                  style={{ margin: 10 }}
                  fullWidth
                  className={classes.textField}
                  variant="outlined"
                />
                <TextField
                  label="Placa"
                  name="board"
                  onChange={handleChange}
                  style={{ margin: 10 }}
                  className={classes.textField}
                  variant="outlined"
                />
                <TextField
                  label="Quilometragem"
                  name="mileage"
                  onChange={handleChange}
                  style={{ margin: 10 }}
                  className={classes.textField}
                  variant="outlined"
                />
                <TextField
                  label="Ano"
                  name="year"
                  onChange={handleChange}
                  style={{ margin: 10 }}
                  className={classes.textField}
                  variant="outlined"
                />
                <TextField
                  label="Preço"
                  name="price"
                  onChange={handleChange}
                  style={{ margin: 10 }}
                  className={classes.textField}
                  variant="outlined"
                />
                <FormControl variant="outlined">
                  <InputLabel style={{ margin: 10 }}>Marca</InputLabel>
                  <Select
                    name="brand"
                    value={fields.brand.id}
                    onChange={handleChangeSelect}
                    label="Marca"
                    style={{ margin: 10 }}
                  >
                    <MenuItem value="">:: Selecione ::</MenuItem>
                    {brands.map((row: any, i: number) => (
                      <MenuItem key={i} value={row.id}>
                        {row.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel
                    id="demo-simple-select-outlined-label"
                    style={{ margin: 10 }}
                  >
                    Modelo
                  </InputLabel>
                  <Select
                    name="model"
                    value={fields.model.id}
                    onChange={handleChangeSelect}
                    label="Modelo"
                    style={{ margin: 10 }}
                    disabled={fields.brand.id === ""}
                  >
                    <MenuItem value="">:: Selecione ::</MenuItem>
                    {models.map((row: any, i: number) => (
                      <MenuItem key={i} value={row.id}>
                        {row.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel
                    id="demo-simple-select-outlined-label"
                    style={{ margin: 10 }}
                  >
                    Cor
                  </InputLabel>
                  <Select
                    name="color"
                    value={fields.color.id}
                    onChange={handleChangeSelect}
                    label="Cor"
                    style={{ margin: 10 }}
                  >
                    <MenuItem value="">:: Selecione ::</MenuItem>
                    {colors.map((row: any, i: number) => (
                      <MenuItem key={i} value={row.id}>
                        {row.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel
                    id="demo-simple-select-outlined-label"
                    style={{ margin: 10 }}
                  >
                    Cidade
                  </InputLabel>
                  <Select
                    name="city"
                    value={fields.city.id}
                    onChange={handleChangeSelect}
                    label="Cidade"
                    style={{ margin: 10 }}
                  >
                    <MenuItem value="">:: Selecione ::</MenuItem>
                    {cities.map((row: any, i: number) => (
                      <MenuItem key={i} value={row.id}>
                        {row.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
