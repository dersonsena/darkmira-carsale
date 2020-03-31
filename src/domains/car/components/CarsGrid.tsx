import React from "react";
import MUIDataTable, { MUIDataTableColumnDef } from "mui-datatables";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Tooltip, IconButton } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { CAR_ROUTES } from "../../../routes/cars";
import ICar from "../ICar";

const CarsGrid: React.FC<IProps> = props => {
  const {
    rows,
    loading = false,
    title = "",
    columns = [],
    options = {}
  } = props;

  const newOptions = {
    ...options,
    textLabels: {
      body: {
        noMatch: loading ? (
          "Sinto muito, não existe nenhum registro a ser mostrado."
        ) : (
          <CircularProgress disableShrink />
        )
      }
    }
  };

  // @ts-ignore
  if (columns[columns.length - 1].name !== "") {
    columns.push({
      name: "",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          const rowId: string = tableMeta.rowData[0];

          return (
            <>
              <Tooltip title="Ver detalhes deste registro">
                <IconButton
                  onClick={() => {
                    props.history.push(CAR_ROUTES.SHOW.replace(":id", rowId));
                  }}
                  aria-label="view"
                >
                  <VisibilityIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Editar este registro">
                <IconButton
                  onClick={() => {
                    props.history.push(CAR_ROUTES.UPDATE.replace(":id", rowId));
                  }}
                  aria-label="edit"
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Remover este registro">
                <IconButton
                  onClick={() => {
                    props.history.push(CAR_ROUTES.DELETE.replace(":id", rowId));
                  }}
                  aria-label="delete"
                  color="secondary"
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </>
          );
        }
      }
    });
  }

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
  history?: any;
  // options?: MUIDataTableOptions;
}

export default CarsGrid;
