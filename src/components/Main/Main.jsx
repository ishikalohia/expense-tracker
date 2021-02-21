import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import Form from "./Form/Form";

const Main = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" />
      <CardContent>
        <Typography align="center" variant="h5">
          Balance Sheet Rs. 100
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          Try saying add Rs 30 for sunday.
        </Typography>
        <Divider />
      </CardContent>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Form />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
