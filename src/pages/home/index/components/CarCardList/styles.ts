import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  container: {
    // minHeight: 188
  },
  cardArea: {
    display: "flex"
  },
  media: {
    minWidth: 250,
    maxWidth: 250
  },
  brandNameContainer: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#2E2E37",
    letterSpacing: -1,
    fontSize: 16,
    lineHeight: 1.2
  },
  brandName: {
    color: "#212121",
    fontSize: 30,
    textTransform: "uppercase"
  },
  modelName: {
    color: "#F40057",
    fontSize: 30,
    textTransform: "uppercase"
  },
  carDescription: {
    textTransform: "uppercase",
    color: "#8B8C99",
    letterSpacing: -1,
    fontSize: 18,
    lineHeight: 1.2
  },
  boxDivider: {
    marginTop: 29
  },
  yearAndKmContainer: {
    display: "flex",
    flexDirection: "row"
  },
  detailsLabel: {
    letterSpacing: -1,
    color: "#B0B0B9",
    fontSize: 15,
    marginRight: 10
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1
  },
  carDetails: {
    display: "flex",
    flexDirection: "column",
    minWidth: 280,
    flexGrow: 1,
    borderRight: "1px solid #ccc"
  },
  priceContainer: {
    display: "flex",
    flexDirection: "column",
    minWidth: 280,
    flexGrow: 0,
    justifyContent: "center",
    alignItems: "center",
    letterSpacing: -3,
    color: "#646572",
    fontSize: 45,
    fontWeight: "bold"
  },
  footer: {
    display: "flex"
  },
  footerItems: {
    display: "flex",
    alignItems: "center",
    marginRight: 10
  },
  city: {
    letterSpacing: -1
  },
  views: {
    letterSpacing: -1
  }
}));
