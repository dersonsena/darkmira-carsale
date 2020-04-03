import { MUIDataTableColumnDef, MUIDataTableOptions } from "mui-datatables";
import lang from "../../../lang";

export const muiDatatablesColumns: MUIDataTableColumnDef[] = [
  {
    label: "",
    name: "id",
    options: {
      display: "false",
      filter: false,
      sort: true
    }
  },
  {
    label: lang("cars.entity.model"),
    name: "model.name",
    options: {
      filter: false,
      sort: true
    }
  },
  {
    label: lang("cars.entity.description"),
    name: "description",
    options: {
      filter: false,
      sort: true
    }
  },
  {
    label: lang("cars.entity.brand"),
    name: "brand.name",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    label: lang("cars.entity.year"),
    name: "year",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    label: lang("cars.entity.color"),
    name: "color.name",
    options: {
      filter: true,
      sort: true
    }
  }
];

export const muiDatatablesOptions: MUIDataTableOptions = {};
