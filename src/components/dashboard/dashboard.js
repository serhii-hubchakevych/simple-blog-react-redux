import React from "react";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";

import { logoutUser, createPost, resetPublishStatus } from "../../actions";
import DashboardForm from "../dashboard-form";
import "./dashboard.css";

const Dashboard = props => {
  const {
    loginStatus,
    currentLoginedUser,
    logoutUser,
    createPost,
    publishStatus,
    resetPublishStatus
  } = props;

  if (!loginStatus) {
    return <Redirect to="/login" />;
  }

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar className="align-items">
          <Typography variant="h6">
            <Link to="/" className="home-link">
              Dashboard
            </Link>
          </Typography>
          <Button color="inherit" onClick={() => logoutUser()}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <div className="center-container">
        <Container maxWidth="xs">
          {publishStatus ? (
            <Card className="container-card">
              <div className="post-created-card">
                <DoneAllIcon style={{ color: "green", marginRight: 10 }} />
                Post created! Want to see your post?
              </div>
              <Link to="/" onClick={() => resetPublishStatus()}>
                YES
              </Link>
            </Card>
          ) : null}
          <DashboardForm
            createPost={createPost}
            currentLoginedUser={currentLoginedUser}
            resetPublishStatus={resetPublishStatus}
          />
        </Container>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({
  authReducer: { loginStatus, currentLoginedUser },
  blogReducer: { publishStatus }
}) => ({
  loginStatus,
  currentLoginedUser,
  publishStatus
});

const mapDispatchToProps = { logoutUser, createPost, resetPublishStatus };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
