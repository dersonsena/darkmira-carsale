import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  addButon: {
    marginTop: theme.spacing(3)
  }
}));
