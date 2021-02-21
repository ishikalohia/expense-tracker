import React from "react";
import {
  FormControl,
  Typography,
  Grid,
  Select,
  InputLabel,
  MenuList,
  TextField,
  Button,
} from "@material-ui/core";

import useStyles from "./styles.js";

const Form = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select>
            <MenuList value="Income"> Income</MenuList>
            <MenuList value="Expense"> Expense</MenuList>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select>
            <MenuList value="Business"> Business</MenuList>
            <MenuList value="Salary"> Salary</MenuList>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type="number" label="Amount" fullWidth></TextField>
      </Grid>
      <Grid item xs={6}>
        <TextField type="date" label="Date" fullWidth></TextField>
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
      >
        Create Item
      </Button>
    </Grid>
  );
};

export default Form;
