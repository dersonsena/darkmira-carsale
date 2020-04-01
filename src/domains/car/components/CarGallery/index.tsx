import React, { FC } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  CardActions,
  Typography,
  FormControlLabel,
  Button
} from "@material-ui/core";
import { ICarPhoto } from "../../ICar";
import styles from "./styles";
import LabelFeatured from "./LabelFeatured";
import SwitchFeatured from "./SwitchFeatured";

interface IProps {
  photos: ICarPhoto[];
  showActions?: boolean;
  disableFeature?: boolean;
  onRemovePhoto?: (
    event: React.MouseEvent<Element, MouseEvent>,
    index: number
  ) => void;
  onToggleFeatured?: (event: React.ChangeEvent, index: number) => void;
}

const CarGallery: FC<IProps> = (props: IProps) => {
  const {
    photos,
    onToggleFeatured,
    onRemovePhoto,
    showActions = true,
    disableFeature = false
  } = props;

  const classes = styles();

  return (
    <>
      {photos.map((photo: ICarPhoto, i: number) => (
        <Grid key={i} item xs={12} sm={4} md={3} lg={3}>
          <Card key={i} className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={photo.image}
                title="Title"
              />
            </CardActionArea>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {photo.name}
              </Typography>
              {props.disableFeature ? (
                <LabelFeatured photo={photo} />
              ) : (
                <FormControlLabel
                  control={
                    <SwitchFeatured photo={photo} index={i} {...props} />
                  }
                  label="Foto Destaque"
                />
              )}
            </CardContent>
            {showActions && (
              <CardActions>
                <Button
                  onClick={event => {
                    if (onRemovePhoto) onRemovePhoto(event, i);
                  }}
                  color="secondary"
                >
                  Remover
                </Button>
              </CardActions>
            )}
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default CarGallery;
