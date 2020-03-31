import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AddCircle from "@material-ui/icons/AddCircle";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import styles from "./styles";
import CarsGrid from "../../../domains/car/components/CarsGrid";
import ICar from "../../../domains/car/ICar";
import { muiDatatablesColumns, muiDatatablesOptions } from "./config";
import lang from "../../../lang";
import CarService from "../../../domains/car/CarService";
import Breadcrumb from "../../../components/Breadcrumb";
import { CAR_ROUTES } from "../../../routes/cars";

const IndexPage = (props: any) => {
  const classes = styles();
  const [rows, setRows] = useState<ICar[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSnack, setShowSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackSeverity, setSnackSeverity] = useState("success");

  useEffect(() => {
    setLoading(true);

    if (props.location.state && props.location.state.snackMessage) {
      setShowSnack(true);
      setSnackMessage(props.location.state.snackMessage);
      setSnackSeverity(props.location.state.snackSeverity);
    }

    CarService.build()
      .getAllByCollection({ sort: { column: "description" } })
      .then((cars: any) => setRows(cars))
      .finally(() => setLoading(false));
  }, [props.location.state]);

  const Alert = (props: any) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Snackbar
        open={showSnack}
        autoHideDuration={4500}
        onClose={() => setShowSnack(false)}
      >
        <Alert onClose={() => setShowSnack(false)} severity={snackSeverity}>
          {snackMessage}
        </Alert>
      </Snackbar>
      <Breadcrumb data={props.meta.breadcrumb} />
      <Button
        variant="contained"
        color="primary"
        className={classes.addButon}
        size="large"
        onClick={() => props.history.push(CAR_ROUTES.CREATE)}
        startIcon={<AddCircle />}
      >
        Novo Carro
      </Button>
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

export default IndexPage;
