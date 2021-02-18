import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Doughnut } from "react-chartjs-2";

import useStyles from "./styles";

const Details = () => {
  const classes = useStyles();
  return (
    <Card className={classes.income}>
      <CardHeader title="income" />
      <CardContent>
        <Typography variant="h5">Rs 50</Typography>
        {/* <Doughnut data="data" /> */}
      </CardContent>
    </Card>
  );
};

export default Details;
