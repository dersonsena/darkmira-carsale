import React from "react";
import MUIDataTable, {
  MUIDataTableColumnDef,
  MUIDataTableOptions
} from "mui-datatables";
import CircularProgress from "@material-ui/core/CircularProgress";
import ICar from "../ICar";

const CarsGrid: React.FC<IProps> = ({
  rows,
  loading = false,
  title = "",
  columns = [],
  options = {}
}) => {
  const newOptions = {
    ...options,
    textLabels: {
      body: {
        noMatch: loading ? (
          "Sorry, there is no matching data to display"
        ) : (
          <CircularProgress disableShrink />
        )
      }
    }
  };

  return (
    <MUIDataTable
      title={title}
      data={rows}
      columns={columns}
      options={newOptions}
    />
  );
};

interface IProps {
  rows: ICar[];
  loading?: boolean;
  title?: string;
  columns?: MUIDataTableColumnDef[];
  options?: any;
  // options?: MUIDataTableOptions;
}

export default CarsGrid;
