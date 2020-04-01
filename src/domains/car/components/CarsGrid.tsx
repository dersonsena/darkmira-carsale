import React from "react";
import MUIDataTable, { MUIDataTableColumnDef } from "mui-datatables";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Tooltip, IconButton } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { CAR_ROUTES } from "../../../routes/cars";
import ICar from "../ICar";
import CarService from "../CarService";
import lang from "../../../lang";

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
          lang("general.noResultsOnGrid")
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
              <Tooltip title={lang("general.viewTooltipLabel")}>
                <IconButton
                  onClick={() => {
                    props.history.push(
                      CAR_ROUTES.DETAILS.replace(":id", rowId)
                    );
                  }}
                  aria-label="view"
                >
                  <VisibilityIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title={lang("general.updateTooltipLabel")}>
                <IconButton
                  onClick={() => {
                    props.history.push(CAR_ROUTES.UPDATE.replace(":id", rowId));
                  }}
                  aria-label="edit"
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title={lang("general.removeTooltipLabel")}>
                <IconButton
                  onClick={() => {
                    if (!window.confirm(lang("general.confirmDeleteMessage"))) {
                      return false;
                    }
                    CarService.build()
                      .delete(rowId)
                      .then(() => {
                        props.history.push(CAR_ROUTES.INDEX, {
                          snackMessage: lang("cars.form.deleteMessage"),
                          snackSeverity: "success"
                        });
                      });
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
