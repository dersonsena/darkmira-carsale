import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  container: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  brandName: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#2E2E37",
    letterSpacing: -1,
    fontSize: 16,
    lineHeight: 1.2
  },
  carDescription: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#8B8C99",
    letterSpacing: -1,
    fontSize: 14,
    lineHeight: 1.2
  },
  boxDivider: {
    marginTop: 45
  },
  price: {
    color: "#686976",
    fontWeight: "bold",
    fontSize: 30,
    letterSpacing: -2,
    lineHeight: 0.6,
    marginBottom: 0
  },
  details: {
    display: "flex",
    justifyContent: "space-between"
  },
  detailsLabel: {
    letterSpacing: -1,
    color: "#B0B0B9",
    fontSize: 15,
    fontWeight: "bold"
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 10
  },
  footerItems: {
    display: "flex",
    alignItems: "center"
  },
  city: {
    letterSpacing: -1
  },
  views: {
    letterSpacing: -1
  }
}));
