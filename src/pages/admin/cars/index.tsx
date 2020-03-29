import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import styles from "./styles";
import CarsGrid from "../../../domains/car/components/CarsGrid";
import ICar from "../../../domains/car/ICar";
import { muiDatatablesColumns, muiDatatablesOptions } from "./config";
import lang from "../../../lang";
import CarService from "../../../domains/car/CarService";
import Breadcrumb from "../../../components/Breadcrumb";

const CarIndexPage = (props: any) => {
  const classes = styles();
  const [rows, setRows] = useState<ICar[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    CarService.build()
      .getAllByCollection()
      .then((cars: any) => setRows(cars))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Breadcrumb data={props.meta.breadcrumb} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={classes.paper}>
            <CarsGrid
              rows={rows}
              title={lang("cars.title")}
              loading={loading}
              columns={muiDatatablesColumns}
              options={muiDatatablesOptions}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

interface IProps {
  meta: any;
}

export default CarIndexPage;
