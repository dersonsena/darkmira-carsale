import { MUIDataTableColumnDef, MUIDataTableOptions } from "mui-datatables";
import lang from "../../../lang";

export const muiDatatablesColumns: MUIDataTableColumnDef[] = [
  {
    label: lang("cars.grid.model"),
    name: "model.name",
    options: {
      filter: false,
      sort: true
    }
  },
  {
    label: lang("cars.grid.description"),
    name: "description",
    options: {
      filter: false,
      sort: true
    }
  },
  {
    label: lang("cars.grid.brand"),
    name: "model.brand.name",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    label: lang("cars.grid.year"),
    name: "year",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    label: lang("cars.grid.color"),
    name: "color.name",
    options: {
      filter: true,
      sort: true
    }
  }
];

export const muiDatatablesOptions: MUIDataTableOptions = {};
