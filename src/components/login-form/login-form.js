import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import "./login-form.css";

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

const LoginForm = props => {
  const { handleSubmit, updateRegistrationStatus, loginUser } = props;

  return (
    <form noValidate onSubmit={handleSubmit( formData => loginUser(formData))}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field
            name="login"
            type="text"
            component={renderField}
            label="Email:"
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="password"
            type="password"
            component={renderField}
            label="Password"
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign In
          </Button>
        </Grid>
        <Grid item className="right-align">
          <Link
            to="/register"
            variant="body2"
            onClick={() => updateRegistrationStatus()}
          >
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};

const validate = values => {
  const errors = {};
  if (!values.login) {
    errors.login = "Login field is required!";
  }
  if (!values.password) {
    errors.password = "Password field is required!";
  }

  return errors;
};

export default reduxForm({
  form: "loginForm",
  validate
})(LoginForm);
