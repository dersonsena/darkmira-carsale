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
  Button,
  Divider
} from "@material-ui/core";
import { ICarPhoto } from "../ICar";

interface IProps {
  photos: ICarPhoto[];
  classes?: any;
  showActions?: boolean;
  disableFeature?: boolean;
  onRemovePhoto?: (
    event: React.MouseEvent<Element, MouseEvent>,
    index: number
  ) => void;
  onToggleFeatured?: (event: React.ChangeEvent, index: number) => void;
}

const SwitchFeatured = (props: any) => (
  <Switch
    checked={props.photo.featured}
    disabled={props.disableFeature}
    onChange={(event: any) => {
      if (props.onToggleFeatured) props.onToggleFeatured(event, props.index);
    }}
    name={`photo-${props.index}`}
    color="primary"
  />
);

const LabelFeatured = (props: any) => {
  const color = props.photo.featured ? "primary" : "initial";

  return (
    <Typography
      variant="body1"
      color={color}
      style={{
        fontWeight: "bold",
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        textAlign: "center",
        cursor: "default"
      }}
      gutterBottom
    >
      Destaque: {props.photo.featured ? "SIM" : "NÃO"}
    </Typography>
  );
};

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
