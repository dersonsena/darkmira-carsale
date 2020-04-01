import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  sectionTitle: {
    color: "#686976",
    letterSpacing: -1
  },
  brandsCardContainer: {
    maxWidth: 300
  },
  brandsCardMedia: {
    height: 170,
    backgroundSize: "auto"
  },
  brandName: {
    letterSpacing: -1,
    fontWeight: "bold",
    color: "#666",
    marginTop: theme.spacing(1)
  }
}));
