import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  brandsCardContainer: {
    maxWidth: 300
  },
  sectionTitle: {
    color: "#686976",
    letterSpacing: -1
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
