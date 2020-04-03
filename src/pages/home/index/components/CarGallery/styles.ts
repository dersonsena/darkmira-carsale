import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(4)
  },
  header: {
    display: "flex",
    justifyContent: "space-between"
  },
  sectionTitle: {
    color: "#686976",
    letterSpacing: -1
  }
}));
