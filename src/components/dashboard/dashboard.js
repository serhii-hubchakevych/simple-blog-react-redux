import React from "react";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { logoutUser } from '../../actions';
import DashboardForm from "../dashboard-form";
import "./dashboard.css";

const Dashboard = props => {
  const {
    users,
    registrationStatus,
    loginStatus,
    loginError,
    currentLoginedUser,
    logoutUser
  } = props;

  console.log("USERS", users);
  console.log("registrationStatus", registrationStatus);
  console.log("loginStatus", loginStatus);
  console.log("loginError", loginError);
  console.log("currentLoginedUser", currentLoginedUser);

  if (!loginStatus) {
    return <Redirect to="/login" />;
  }

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar className="align-items">
          <Typography variant="h6">Dashboard</Typography>
          <Button color="inherit" onClick={()=> logoutUser()}>Logout</Button>
        </Toolbar>
      </AppBar>
      <div className="center-container">
        <Container maxWidth="xs">
          <DashboardForm />
        </Container>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({
  blogReducer: {
    users,
    registrationStatus,
    loginStatus,
    loginError,
    currentLoginedUser
  }
}) => ({
  users,
  registrationStatus,
  loginStatus,
  loginError,
  currentLoginedUser
});

const mapDispatchToProps = { logoutUser };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
