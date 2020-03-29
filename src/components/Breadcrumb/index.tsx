import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { Link as RouteLink } from "react-router-dom";

const Breadcrumb = (props: IProps) => {
  return (
    <Breadcrumbs separator={<NavigateNextIcon />} aria-label="breadcrumb">
      {props.data.map((item: any, i: number) => {
        if (item.to === null) {
          return (
            <Typography key={i} color="textPrimary">
              {item.text}
            </Typography>
          );
        }

        return (
          <Link key={i} color="inherit" component={RouteLink} to={item.to}>
            {item.text}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

interface IProps {
  data: any;
}

export default Breadcrumb;
