import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { Link as RouteLink, Switch, Route } from "react-router-dom";
import styles from "./styles";
import lang from "../../lang";
import routes, { IRoute } from "../../routes";
import { HOME_ROUTES } from "../../routes/home";
import { CAR_ROUTES } from "../../routes/cars";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link
        color="inherit"
        target="_blank"
        href="https://github.com/dersonsena"
      >
        Kilderson Sena
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
};

export default function StickyFooter() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {lang("general.appName")}
          </Typography>
          <Button color="inherit" component={RouteLink} to={HOME_ROUTES.INDEX}>
            {lang("general.offerMenu")}
          </Button>
          <Button color="inherit" component={RouteLink} to={CAR_ROUTES.INDEX}>
            {lang("general.adminMenu")}
          </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" className={classes.main} maxWidth="lg">
        <Switch>
          {routes.map((route: IRoute) => (
            <Route
              key={route.path}
              path={route.path}
              exact
              render={(props: any) => (
                <route.component {...props} meta={route.meta} />
              )}
            />
          ))}
        </Switch>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
