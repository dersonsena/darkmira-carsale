import React, { FC } from "react";
import ICar, { ICarPhoto } from "../../../../../domains/car/ICar";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { currencyFormat } from "../../../../../core/utils";

interface IProps {
  car: ICar;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CarCard: FC<IProps> = (props: IProps) => {
  const classes = styles();
  const { car } = props;
  const featuredImage: ICarPhoto = car.photos.filter(
    (photo: ICarPhoto) => photo.featured === true
  )[0];

  return (
    <Card className={classes.container}>
      <CardActionArea onClick={props.onClick}>
        <CardMedia
          className={classes.media}
          image={featuredImage.firebaseUrl}
          title={car.description}
        />
        <CardContent>
          <Typography variant="subtitle1" className={classes.brandName}>
            {car.brand.name} {car.model.name}
          </Typography>
          <Typography variant="subtitle1" className={classes.carDescription}>
            {car.description}
          </Typography>
          <div className={classes.boxDivider}>{""}</div>
          <Typography variant="h6" gutterBottom className={classes.price}>
            R$ {currencyFormat(car.price, 0)}
          </Typography>
          <div className={classes.details}>
            <Typography
              variant="overline"
              display="block"
              className={classes.detailsLabel}
            >
              {car.year}
            </Typography>
            <Typography
              variant="overline"
              display="block"
              className={classes.detailsLabel}
            >
              {currencyFormat(car.mileage, 0)} KM
            </Typography>
          </div>
          <Divider />
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
              <VisibilityIcon color="action" fontSize="small" />{" "}
              <span className={classes.views}> {car.views}</span>
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CarCard;
