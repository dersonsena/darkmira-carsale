import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { CircularProgress, Backdrop } from "@material-ui/core";
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
import CarForm from "./CarForm";
import CarValidators from "../../../domains/car/CarValidator";

const FormPage = (props: any) => {
  const classes = styles();
  const carId: string = props.match.params.id;
  const carService = CarService.build();

  const [fields, setFields] = useState<ICar>(initialFields);
  const [validators, setValidators] = useState({});
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

        return carId;
      })
      .then((documentId: string) => CarService.build().getById(documentId))
      .then(car => {
        if (!car) {
          return true;
        }

        // @ts-ignore
        setModels(car.brand.models);
        setFields(car);

        return true;
      })
      .finally(() => setLoading(false));
  }, [carId]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name: string = event.target.name;
    const type: string = event.target.type;
    let value: any = event.target.value;

    if (type === "number") {
      value = parseInt(value, 10);
    }

    setFields({ ...fields, [name]: value });
  };

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const auxValues: ICar = { ...fields };
    const name: string = event.target.name;
    const value: string = event.target.value;

    if (value === "") {
      // @ts-ignore
      auxValues[name] = initialFields[name];

      if (name === "brand") {
        auxValues.model = initialFields.model;
      }

      setFields(auxValues);
      return;
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
        return;
    }

    const selected: any = collection.find((row: any) => row.id === value);

    if (Object.prototype.hasOwnProperty.call(selected, "models")) {
      setModels(selected.models);
    }

    auxValues[name] = selected;
    setFields(auxValues);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newFields: ICar = {
      ...fields,
      slug: slug(fields.description)
    };

    const validator = CarValidators.build(newFields);

    if (!validator.validate()) {
      setValidators(validator.getErrors());
      return;
    }

    setLoading(true);

    const promises: any[] = [];

    newFields.photos.forEach((photo: ICarPhoto, i: number) => {
      if (photo.firebaseUrl !== "") {
        return;
      }

      promises.push(carService.uploadPhoto(photo, i));
    });

    Promise.all(promises)
      .then((photoInfos: any[]) => {
        photoInfos.forEach((info: any) => {
          newFields.photos[info.index].firebaseUrl = info.url;
          newFields.photos[info.index].image = "";
          delete newFields.photos[info.index].file;
        });

        return newFields;
      })
      .then((values: ICar) => {
        if (!carId) {
          return carService.insert(values);
        }

        return carService.update(carId, values);
      })
      .then(() => {
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
    const count: number = selectedFiles.length;
    const totalPhotos: number = fields.photos.length;

    for (let i = 0; i < count; i += 1) {
      const fileReader = new FileReader();
      const file = selectedFiles[i];

      fileReader.readAsDataURL(file);

      fileReader.onload = (e: any) => {
        auxValues.photos.push({
          name: file.name,
          type: file.type,
          image: e.target.result,
          firebaseUrl: "",
          featured: false,
          file
        });
        setTimeout(() => setFields(auxValues), 100);
      };
    }

    setTimeout(() => {
      if (totalPhotos === 0) {
        auxValues.photos[0].featured = true;
      }

      setFields(auxValues);
    }, 100);
  };

  const handleToggleFeatured = (event: React.ChangeEvent, index: number) => {
    const newFields = { ...fields };

    const newPhotos = newFields.photos.map((photo: ICarPhoto) => {
      photo.featured = false;
      return photo;
    });

    newPhotos[index].featured = true;
    newFields.photos = newPhotos;

    setFields(newFields);
  };

  const handleRemovePhoto = (event: React.MouseEvent, index: number) => {
    const newFields = { ...fields };
    newFields.photos.splice(index, 1);

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
            <CarForm
              fields={fields}
              validators={validators}
              classes={classes}
              brands={brands}
              models={models}
              colors={colors}
              cities={cities}
              onChange={handleChange}
              onChangeSelect={handleChangeSelect}
              onSubmit={handleSubmit}
              onCapturePhoto={handleCapture}
              onToggleFeatured={handleToggleFeatured}
              onRemovePhoto={handleRemovePhoto}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FormPage;
