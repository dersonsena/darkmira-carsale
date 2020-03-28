import React from "react";
import MUIDataTable, {
  MUIDataTableColumnDef,
  MUIDataTableOptions
} from "mui-datatables";
import ICar from "../ICar";

const CarsGrid: React.FC<IProps> = ({
  rows,
  title,
  columns = [],
  options = {}
}) => (
  <MUIDataTable title={title} data={rows} columns={columns} options={options} />
);

interface IProps {
  rows: ICar[];
  title?: string;
  columns?: MUIDataTableColumnDef[];
  options?: MUIDataTableOptions;
}

export default CarsGrid;
