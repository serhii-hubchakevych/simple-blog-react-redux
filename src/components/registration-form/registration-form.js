import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

import "./registration-form.css";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
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
    />
  </React.Fragment>
);

const RegisterForm = props => {
  const { handleSubmit, registrationUser } = props;

  return (
        <form
          noValidate
          onSubmit={handleSubmit( formData => registrationUser(formData))}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field
                name="firstname"
                type="text"
                component={renderField}
                label="Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name="lastname"
                type="text"
                component={renderField}
                label="Surname"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="email"
                type="text"
                component={renderField}
                label="Email"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="password"
                type="text"
                component={renderField}
                label="Password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item className="right-align">
              <Link to="/login" variant="body2">
                {"Already have an account? Login"}
              </Link>
            </Grid>
          </Grid>
        </form>

  );
};

const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "Name field is required!";
  }
  if (!values.lastname) {
    errors.lastname = "Surname field is required!";
  }
  if (!values.email) {
    errors.email = "Email field is required!";
  }
  if (!values.password) {
    errors.password = "Password field is required";
  }
  return errors;
};

export default reduxForm({
  form: "registerForm",
  validate
})(RegisterForm);
