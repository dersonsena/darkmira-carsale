import { Switch } from "@material-ui/core";
import React from "react";

const SwitchFeatured = (props: any) => (
  <Switch
    checked={props.photo.featured}
    disabled={props.disableFeature}
    onChange={(event: any) => {
      if (props.onToggleFeatured) props.onToggleFeatured(event, props.index);
    }}
    name={`photo-${props.index}`}
    color="primary"
  />
);
export default SwitchFeatured;
