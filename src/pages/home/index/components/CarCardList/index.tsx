import React, { FC } from "react";
import styles from "./styles";
import ICar, { ICarPhoto } from "../../../../../domains/car/ICar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { currencyFormat } from "../../../../../core/utils";
import lang from "../../../../../lang";

interface IProps {
  car: ICar;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CarCardList: FC<IProps> = (props: IProps) => {
  const classes = styles();
  const { car } = props;
  const featuredImage: ICarPhoto = car.photos.filter(
    (photo: ICarPhoto) => photo.featured === true
  )[0];

  return (
    <Card className={classes.container}>
      <CardActionArea onClick={props.onClick} className={classes.cardArea}>
        <CardMedia
          className={classes.media}
          component="img"
          image={featuredImage.firebaseUrl}
          title={car.description}
        />
        <CardContent className={classes.cardContent}>
          <div className={classes.carDetails}>
            <Typography
              variant="subtitle1"
              className={classes.brandNameContainer}
            >
              <span className={classes.brandName}>{car.brand.name}</span>{" "}
              <span className={classes.modelName}>{car.model.name}</span>
            </Typography>
            <Typography variant="subtitle1" className={classes.carDescription}>
              {car.description}
            </Typography>
            <div className={classes.boxDivider}>{""}</div>
            <div className={classes.yearAndKmContainer}>
              <Typography
                variant="overline"
                display="block"
                className={classes.detailsLabel}
              >
                {lang("cars.entity.year")} <strong>{car.year}</strong>
              </Typography>
              <Typography
                variant="overline"
                display="block"
                className={classes.detailsLabel}
              >
                {lang("cars.entity.mileage")}{" "}
                <strong>{currencyFormat(car.mileage, 0)} KM</strong>
              </Typography>
            </div>
            <div className={classes.footer}>
              <Typography
                variant="overline"
                display="block"
                className={classes.footerItems}
              >
                <LocationOnIcon color="action" fontSize="small" />
                <span className={classes.city}>{car.city.name}</span>
              </Typography>
              <Typography
                variant="overline"
                display="block"
                className={classes.footerItems}
              >
                <VisibilityIcon color="action" fontSize="small" />
                <span className={classes.views}> {car.views}</span>
              </Typography>
            </div>
          </div>
          <div className={classes.priceContainer}>
            R$ {currencyFormat(car.price, 0)}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CarCardList;
