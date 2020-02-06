import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { reset, Field, reduxForm } from "redux-form";

import "./dashboard-form.css";

const renderField = ({
  input,
  label,
  type,
  rows,
  meta: { touched, error }
}) => (
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

const DashboardForm = props => {
  const {
    handleSubmit,
    createPost,
    currentLoginedUser,
    resetPublishStatus
  } = props;
  return (
    <form
      noValidate
      onSubmit={handleSubmit(formData => {
        createPost(formData, currentLoginedUser);
      })}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field
            name="title"
            type="text"
            component={renderField}
            label="Title:"
            rows="2"
            onFocus={() => resetPublishStatus()}
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

const afterSubmit = (result, dispatch) => dispatch(reset("dashboardForm"));

export default reduxForm({
  form: "dashboardForm",
  validate,
  onSubmitSuccess: afterSubmit
})(DashboardForm);
