import React from "react";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import RegistrationForm from "../registration-form";
import { registrationUser } from "../../actions";

import "./registration.css";

const Registration = props => {

  const { registrationUser, registrationStatus } = props;
  if (registrationStatus) {
    return(
      <Redirect to="/login"/>
    )
  }
  return (
    <div className="center-container">
      <Container maxWidth="xs">
        <h1>Registration</h1>
        <RegistrationForm registrationUser={ registrationUser }/>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ authReducer: { users, registrationStatus } }) =>  ({ users, registrationStatus});

const mapDispatchToProps = { registrationUser };

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
