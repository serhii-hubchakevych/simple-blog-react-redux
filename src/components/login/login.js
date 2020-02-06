import React from "react";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import ErrorIcon from "@material-ui/icons/Error";
import Card from "@material-ui/core/Card";
import { Redirect } from "react-router-dom";

import { updateRegistrationStatus, loginUser } from "../../actions";
import LoginForm from "../login-form";
import "./login.css";

const Login = props => {
  const {
    registrationStatus,
    updateRegistrationStatus,
    loginUser,
    loginStatus,
    loginError
  } = props;

  return (
    <div className="center-container">
      <Container maxWidth="xs">
        {registrationStatus ? (
          <Card className="suc-card">
            <DoneAllIcon style={{ color: "green", marginRight: 10 }} />
            Successfully registered
          </Card>
        ) : null}

        {loginError ? (
          <Card className="suc-card">
            <ErrorIcon style={{ color: "red", marginRight: 10 }} />
            Check your login or password!
          </Card>
        ) : null}
        <h1>Login</h1>
        <LoginForm
          updateRegistrationStatus={updateRegistrationStatus}
          loginUser={loginUser}
        />
      </Container>
      {loginStatus ? <Redirect to="/dashboard" /> : null}
    </div>
  );
};

const mapStateToProps = ({
  authReducer: { users, registrationStatus, loginStatus, loginError }
}) => ({
  users,
  registrationStatus,
  loginStatus,
  loginError
});

const mapDispatchToProps = { updateRegistrationStatus, loginUser };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
