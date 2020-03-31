import React, { FC } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Switch,
  Grid,
  CardActions,
  Typography,
  FormControlLabel,
  Button
} from "@material-ui/core";
import { ICarPhoto } from "../../../domains/car/ICar";

interface IProps {
  photos: ICarPhoto[];
  classes?: any;
  showActions?: boolean;
  disableFeature?: boolean;
  onToggleFeatured(event: React.ChangeEvent, index: number): void;
  onRemovePhoto(event: React.MouseEvent, index: number): void;
}

const CarGallery: FC<IProps> = (props: IProps) => {
  const {
    photos,
    classes,
    onToggleFeatured,
    onRemovePhoto,
    showActions = true,
    disableFeature = false
  } = props;

  return (
    <>
      {photos.map((photo: ICarPhoto, i: number) => (
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
              <Typography variant="body2" color="textSecondary" component="p">
                {photo.name}

                <FormControlLabel
                  control={
                    <Switch
                      checked={photo.featured}
                      disabled={disableFeature}
                      onChange={event => onToggleFeatured(event, i)}
                      name={`photo-${i}`}
                      color="primary"
                    />
                  }
                  label="Foto Destaque"
                />
              </Typography>
            </CardContent>
            {showActions && (
              <CardActions>
                <Button
                  onClick={event => onRemovePhoto(event, i)}
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
