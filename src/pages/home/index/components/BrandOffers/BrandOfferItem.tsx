import React, { FC } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import IBrand from "../../../../../domains/brand/IBrand";

interface IProps {
  brand: IBrand;
}

const BrandOfferItem: FC<IProps> = (props: IProps) => {
  const classes = styles();
  const { brand } = props;

  return (
    <Grid item xs={6} sm={4} md={2} lg={2}>
      <Card className={classes.brandsCardContainer}>
        <CardActionArea>
          <CardMedia
            style={{ height: 90, backgroundSize: "auto" }}
            image={brand.logoUrl}
            title={`Ver as oferta da marca ${brand.name}`}
          />
          <CardContent>
            <Divider />
            <Typography
              className={classes.brandName}
              align="center"
              variant="h5"
              component="h2"
            >
              {brand.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default BrandOfferItem;
