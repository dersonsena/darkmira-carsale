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
  paperForm: {
    marginTop: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    padding: theme.spacing(3)
  },
  addButon: {
    marginTop: theme.spacing(3)
  },
  formContainer: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    margin: 10,
    width: "25ch"
  },
  formControl: {
    margin: 10,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));
