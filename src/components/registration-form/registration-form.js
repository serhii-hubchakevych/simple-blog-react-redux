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
  } else if (values.firstname.length < 2 ){
    errors.firstname = "Name length must be higher then 1!";
  } else if (values.firstname.length > 15){
    errors.firstname = "Name length must be less then 15!";
  } else if (/[^A-Za-z]+/.test(values.firstname)){
    errors.firstname = "Name must be a string value!";
  }
  if (!values.lastname) {
    errors.lastname = "Surname field is required!";
  } else if (values.lastname.length < 2 ){
    errors.lastname = "Surname length must be higher then 1!";
  } else if (values.lastname.length > 15){
    errors.lastname = "Surname length must be less then 15!";
  } else if (/[^A-Za-z]+/.test(values.lastname)){
    errors.lastname = "Surname must be a string value!";
  }
  if (!values.email) {
    errors.email = "Email field is required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = "Email field is not valid!";
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
  form: "registerForm",
  validate
})(RegisterForm);
