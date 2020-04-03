import React, { FC, useState } from "react";
import ICar from "../../../../../domains/car/ICar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CarCardGrid from "../CarCardGrid";
import styles from "./styles";
import ListIcon from "@material-ui/icons/List";
import GridOnIcon from "@material-ui/icons/GridOn";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import CarCardList from "../CarCardList";
import { HOME_ROUTES } from "../../../../../routes/home";
import FakeCarCard from "../FakeCarCard";

export enum VIEW_MODE {
  GRID = "grid",
  LIST = "list"
}

interface IProps {
  offers: ICar[];
  history: any;
  loading: boolean;
}

const FeaturedOffers: FC<IProps> = (props: IProps) => {
  const classes = styles();

  const [viewMode, setViewMode] = useState<VIEW_MODE>(VIEW_MODE.GRID);

  const handleClickToggleViewMode = (event: any) => {
    const newMode =
      viewMode === VIEW_MODE.LIST ? VIEW_MODE.GRID : VIEW_MODE.LIST;
    setViewMode(newMode);
  };

  const handleOnClickCar = (
    event: React.MouseEvent<HTMLButtonElement>,
    car: ICar
  ) => {
    const route = HOME_ROUTES.DETAILS.replace(":brand", car.brand.slug)
      .replace(":model", car.model.slug)
      .replace(":year", car.year.toString())
      .replace(":description", car.slug);

    props.history.push(route);
  };

  const getCarViewModeComponent = (car: ICar, index: number) =>
    viewMode === VIEW_MODE.GRID ? (
      <Grid key={index} item xs={6} sm={4} md={3} lg={3}>
        <CarCardGrid
          onClick={e => handleOnClickCar(e, car)}
          car={car}
          key={index}
        />
      </Grid>
    ) : (
      <Grid key={index} item xs={12} sm={12} md={12} lg={12}>
        <CarCardList
          onClick={e => handleOnClickCar(e, car)}
          car={car}
          key={index}
        />
      </Grid>
    );

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={12} style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className={classes.header}>
          <Typography
            variant="h6"
            className={classes.sectionTitle}
            gutterBottom
          >
            Ofertas em Destaque
          </Typography>
          <IconButton
            aria-label="toggleViewMode"
            onClick={handleClickToggleViewMode}
          >
            {viewMode === VIEW_MODE.GRID ? (
              <Tooltip title="Alterar para visualização em Lista">
                <ListIcon />
              </Tooltip>
            ) : (
              <Tooltip title="Alterar para visualização em Grade">
                <GridOnIcon />
              </Tooltip>
            )}
          </IconButton>
        </div>
      </Grid>

      {props.loading ? (
        <Grid container spacing={3}>
          {Array.from({ length: 4 }, (v: number, k: number) => (
            <Grid key={k} item xs={6} sm={4} md={3} lg={3}>
              <FakeCarCard />
            </Grid>
          ))}
        </Grid>
      ) : (
        props.offers.map((car: ICar, i: number) =>
          getCarViewModeComponent(car, i)
        )
      )}
    </Grid>
  );
};

export default FeaturedOffers;
