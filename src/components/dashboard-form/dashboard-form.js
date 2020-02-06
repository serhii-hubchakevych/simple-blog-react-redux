import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Field, reduxForm } from "redux-form";

import "./dashboard-form.css";


const renderField = ({ input, label, type, rows, meta: { touched, error } }) => (
    <React.Fragment>
      <TextField
        id="outlined-basic"
        {...input}
        error={touched && error && true}
        helperText={touched && error}
        label={label}
        type={type}
        variant="outlined"
        fullWidth
        id={input.name}
        multiline
        rows={rows}
      />
    </React.Fragment>
  );


const DashboardForm = () => {
  return (
    <form noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field
            name="title"
            type="text"
            component={renderField}
            label="Title:"
            rows="2"
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="description"
            type="text"
            component={renderField}
            label="Description"
            rows="6"
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Publish
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "Title field is required!";
  }
  if (!values.description) {
    errors.description = "Description field is required!";
  }

  return errors;
};

export default reduxForm({
  form: "dashboardForm",
  validate
})(DashboardForm);
