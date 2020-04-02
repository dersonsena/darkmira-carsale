import React, { FC } from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { Link as RouteLink } from "react-router-dom";

export interface IBreadcrumbItem {
  text: string;
  to: string | null;
}

interface IProps {
  data: IBreadcrumbItem[];
  appendItems?: IBreadcrumbItem[];
}

const Breadcrumb: FC<IProps> = (props: IProps) => {
  const { data, appendItems = [] } = props;
  const navItems = [...data];

  if (appendItems.length > 0) {
    appendItems.forEach((item: IBreadcrumbItem) => navItems.push(item));
  }

  return (
    <Breadcrumbs separator={<NavigateNextIcon />} aria-label="breadcrumb">
      {navItems.map((item: any, i: number) => {
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

export default Breadcrumb;
