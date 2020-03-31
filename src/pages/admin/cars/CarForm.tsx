import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import SaveIcon from "@material-ui/icons/Save";
import { Input, Grid } from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import ICar from "../../../domains/car/ICar";
import IBrand from "../../../domains/brand/IBrand";
import IColor from "../../../domains/color/IColor";
import IModel from "../../../domains/model/IModel";
import ICity from "../../../domains/city/ICity";
import CarGallery from "../../../domains/car/components/CarGallery";

interface IProps {
  fields: ICar;
  validators: any;
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
    validators,
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
          value={fields.description}
          error={!!validators.description}
          helperText={validators.description}
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
            error={!!validators.board}
            helperText={validators.board}
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
            value={fields.mileage}
            error={!!validators.mileage}
            helperText={validators.mileage}
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
            error={!!validators.year}
            helperText={validators.year}
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
            value={fields.price}
            error={!!validators.price}
            helperText={validators.price}
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
            error={!!validators.brand}
            helperText={validators.brand}
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
            error={!!validators.model}
            helperText={validators.model}
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
            error={!!validators.color}
            helperText={validators.color}
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
            error={!!validators.city}
            helperText={validators.city}
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
          <CarGallery
            photos={fields.photos}
            classes={classes}
            onToggleFeatured={onToggleFeatured}
            onRemovePhoto={onRemovePhoto}
          />
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
