import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import styles from "./styles";
import CarsGrid from "../../../domains/car/components/CarsGrid";
import ICar from "../../../domains/car/ICar";
import { muiDatatablesColumns, muiDatatablesOptions } from "./config";
import lang from "../../../lang";

const CarIndexPage = () => {
  const classes = styles();
  const [rows, setRows] = useState<ICar[]>([]);

  useEffect(() => {
    const brand = { id: 1, name: "Toyota", slug: "toyota", logoUrl: "" };
    const city = { id: 1, name: "Fortaleza", slug: "fortaleza" };
    const color = { id: 1, name: "Prata", slug: "prata" };

    setRows([
      {
        id: 1,
        board: "HYY-1234",
        city,
        color,
        createdAt: new Date(),
        mileage: 17000,
        description: "1.3 XS 16V FLEX 4P MANUAL",
        year: 2013,
        model: { id: 1, name: "Etios", slug: "etios", brand },
        price: 41000,
        slug: "1.3-xs-16v-flex-4p-manual",
        photos: []
      }
    ]);
  }, []);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper>
            <CarsGrid
              rows={rows}
              title={lang("cars.title")}
              columns={muiDatatablesColumns}
              options={muiDatatablesOptions}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarIndexPage;
