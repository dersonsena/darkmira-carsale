import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paperContainer: {
    marginTop: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    padding: theme.spacing(3)
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row"
  },
  headerTitles: {
    fontWeight: "bold",
    marginRight: theme.spacing(0.5),
    letterSpacing: -2
  },
  description: {
    color: "#6E6E7C",
    letterSpacing: -0.5
  },
  carDetails: {
    marginTop: theme.spacing(5)
  },
  detailValues: {
    fontWeight: "bold",
    letterSpacing: -1,
    fontSize: 18
  },
  photosContainer: {
    marginTop: theme.spacing(5)
  },
  carImage: {
    maxWidth: "100%",
    padding: theme.spacing(0.6),
    border: "1px solid #ccc",
    borderRadius: 5
  }
}));
