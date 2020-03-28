import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import lang from "../../lang";

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
          <Button color="inherit">Ofertas</Button>
          <Button color="inherit">Administração</Button>
        </Toolbar>
      </AppBar>
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          {lang("general.appName")}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          ~&gt; TODO the home page.
        </Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
