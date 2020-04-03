import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import SaveIcon from "@material-ui/icons/Save";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Input, Grid } from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import ICar from "../../../../domains/car/ICar";
import IBrand from "../../../../domains/brand/IBrand";
import IColor from "../../../../domains/color/IColor";
import IModel from "../../../../domains/model/IModel";
import ICity from "../../../../domains/city/ICity";
import CarGallery from "../../../../domains/car/components/CarGallery";
import lang from "../../../../lang";

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
          label={lang("cars.entity.description")}
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
            label={lang("cars.entity.board")}
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
            label={lang("cars.entity.mileage")}
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
            label={lang("cars.entity.year")}
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
            <MenuItem value="">{lang("general.defaultOptionLabel")}</MenuItem>
            {yearsOptions().map((year: number) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label={lang("cars.entity.price")}
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
            label={lang("cars.entity.brand")}
            error={!!validators.brand}
            helperText={validators.brand}
            required
            value={fields.brand.id}
            onChange={onChangeSelect}
            style={{ margin: 10 }}
            className={classes.textField}
            variant="outlined"
          >
            <MenuItem value="">{lang("general.defaultOptionLabel")}</MenuItem>
            {brands.map((row: any, i: number) => (
              <MenuItem key={i} value={row.id}>
                {row.name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label={lang("cars.entity.model")}
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
            <MenuItem value="">{lang("general.defaultOptionLabel")}</MenuItem>
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
            label={lang("cars.entity.color")}
            style={{ margin: 10 }}
            className={classes.textField}
            variant="outlined"
          >
            <MenuItem value="">{lang("general.defaultOptionLabel")}</MenuItem>
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
            label={lang("cars.entity.city")}
            style={{ margin: 10 }}
            className={classes.textField}
            variant="outlined"
          >
            <MenuItem value="">{lang("general.defaultOptionLabel")}</MenuItem>
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
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={fields.activated}
                    onChange={onChange}
                    name="activated"
                    color="primary"
                  />
                }
                style={{ marginLeft: 1 }}
                label={lang("cars.entity.activated")}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{ margin: 10 }}
              variant="contained"
              component="label"
              onChange={onCapturePhoto}
            >
              <AddPhotoAlternateIcon />
              {lang("cars.form.photoButtonLabel")}
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
          {lang("general.saveButtonLabel")}
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
