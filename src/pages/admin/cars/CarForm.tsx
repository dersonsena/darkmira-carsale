import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import SaveIcon from "@material-ui/icons/Save";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  FormControlLabel,
  Switch,
  Input,
  Grid,
  CardActions
} from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import ICar, { ICarPhoto } from "../../../domains/car/ICar";
import IBrand from "../../../domains/brand/IBrand";
import IColor from "../../../domains/color/IColor";
import IModel from "../../../domains/model/IModel";
import ICity from "../../../domains/city/ICity";

interface IProps {
  fields: ICar;
  classes: any;
  brands: IBrand[];
  models: IModel[];
  colors: IColor[];
  cities: ICity[];
  onChange(event: React.ChangeEvent): void;
  onChangeSelect(event: React.ChangeEvent): void;
  onSubmit(event: React.FormEvent): void;
  onCapturePhoto(event: React.FormEvent): void;
  onToggleFeatured(event: React.ChangeEvent, index: number): void;
  onRemovePhoto(event: React.MouseEvent, index: number): void;
}

const CarForm: FC<IProps> = (props: IProps) => {
  const {
    fields,
    classes,
    brands,
    models,
    colors,
    cities,
    onChange,
    onChangeSelect,
    onSubmit,
    onCapturePhoto,
    onToggleFeatured,
    onRemovePhoto
  } = props;

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className={classes.formContainer}>
        <TextField
          label="Descrição"
          name="description"
          onChange={onChange}
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
            onChange={onChange}
            style={{ margin: 10 }}
            className={classes.textField}
            variant="outlined"
          />
          <TextField
            label="Quilometragem"
            name="mileage"
            type="number"
            required
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChangeSelect}
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
            onChange={onChangeSelect}
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
            onChange={onChangeSelect}
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
            onChange={onChangeSelect}
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
              onChange={onCapturePhoto}
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
          {fields.photos.map((photo: ICarPhoto, i: number) => (
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
                          onChange={event => onToggleFeatured(event, i)}
                          name={`photo-${i}`}
                          color="primary"
                        />
                      }
                      label="Foto Destaque"
                    />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={event => onRemovePhoto(event, i)}
                    color="secondary"
                  >
                    Remover
                  </Button>
                </CardActions>
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
          startIcon={<SaveIcon />}
        >
          Salvar
        </Button>
      </div>
    </form>
  );
};

const yearsOptions = (numberYears: number = 30): number[] => {
  const currentYear: number = new Date().getFullYear();
  const limit: number = currentYear - numberYears;
  const yearList: number[] = [];

  for (let i = currentYear; i >= limit; i -= 1) {
    yearList.push(i);
  }

  return yearList;
};

export default CarForm;
