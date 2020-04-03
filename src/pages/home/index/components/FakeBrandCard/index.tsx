import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Placeholder from "../../../../../components/Placeholder";
import Divider from "@material-ui/core/Divider";
import React from "react";

const FakeBrandCard = () => (
  <Card style={{ maxWidth: 176 }}>
    <CardContent>
      <div style={{ width: "100%", height: 75, marginBottom: 20 }}>
        <Placeholder />
      </div>
      <Divider />
      <div style={{ width: "100%", height: 25, marginTop: 10 }}>
        <Placeholder />
      </div>
    </CardContent>
  </Card>
);

export default FakeBrandCard;
