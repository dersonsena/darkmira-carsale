import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { Link as RouteLink, Route, Switch } from "react-router-dom";
import styles from "./styles";
import lang, {
  getLocale,
  getLocaleName,
  LANGUAGES,
  LOCAL_STORAGE_LANG_NAME
} from "../../lang";
import routes, { IRoute } from "../../routes";
import { HOME_ROUTES } from "../../routes/home";
import { CAR_ROUTES } from "../../routes/cars";
import "react-image-lightbox/style.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TranslateIcon from "@material-ui/icons/Translate";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import SettingsIcon from "@material-ui/icons/Settings";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

const MainLayout = () => {
  const classes = styles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectIdiom = (e: React.MouseEvent, language: LANGUAGES) => {
    window.localStorage.setItem(LOCAL_STORAGE_LANG_NAME, language);
    setAnchorEl(null);
    window.location.reload();
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {lang("general.appName")}
          </Typography>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            color="inherit"
            startIcon={<TranslateIcon />}
            endIcon={<ExpandMoreIcon />}
            onClick={handleClick}
          >
            {getLocaleName()}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem key={1} disabled>
              &gt; {lang("general.selectLanguageText")}
            </MenuItem>
            {getLocale() !== LANGUAGES.EN && (
              <MenuItem
                key={2}
                onClick={e => handleSelectIdiom(e, LANGUAGES.EN)}
              >
                {getLocaleName(LANGUAGES.EN)}
              </MenuItem>
            )}
            {getLocale() !== LANGUAGES.PT_BR && (
              <MenuItem
                key={3}
                onClick={e => handleSelectIdiom(e, LANGUAGES.PT_BR)}
              >
                {getLocaleName(LANGUAGES.PT_BR)}
              </MenuItem>
            )}
          </Menu>
          <Button
            color="inherit"
            startIcon={<DriveEtaIcon />}
            component={RouteLink}
            to={HOME_ROUTES.INDEX}
          >
            {lang("general.offerMenu")}
          </Button>
          <Button
            color="inherit"
            startIcon={<SettingsIcon />}
            component={RouteLink}
            to={CAR_ROUTES.INDEX}
          >
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
};

export default MainLayout;
