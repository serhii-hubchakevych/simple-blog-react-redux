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
    <form noValidate onSubmit={handleSubmit(formData => loginUser(formData))}>
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
    errors.login = "Email field is required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.login)){
    errors.login = "Email field is not valid!";
  }
  if (!values.password) {
    errors.password = "Password field is required";
  } else if (values.password.length < 6 ){
    errors.password = "Password length must be higher then 6!";
  } else if (values.password.length > 15){
    errors.password = "Password length must be less then 15!";
  }

  return errors;
};

export default reduxForm({
  form: "loginForm",
  validate
})(LoginForm);
