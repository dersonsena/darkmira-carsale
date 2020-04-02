import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Placeholder from "../../../../../components/Placeholder";
import Divider from "@material-ui/core/Divider";
import React from "react";

const FakeCarCard = () => (
  <Card style={{ maxWidth: 275 }}>
    <CardContent>
      <div style={{ width: "100%", height: 140, marginBottom: 10 }}>
        <Placeholder />
      </div>
      <div style={{ width: "100%", height: 35, marginBottom: 35 }}>
        <Placeholder />
      </div>
      <div style={{ width: "100%", height: 35, marginBottom: 15 }}>
        <Placeholder />
      </div>
      <Divider />
      <div style={{ width: "100%", height: 20, marginTop: 15 }}>
        <Placeholder />
      </div>
    </CardContent>
  </Card>
);

export default FakeCarCard;
