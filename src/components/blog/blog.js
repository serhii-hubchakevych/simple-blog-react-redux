import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import BlogItem from "../blog-item";
import "./blog.css";

const Blog = props => {

  const { posts } = props;

  console.log(posts);
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar className="align-items">
          <Typography variant="h6">Pacanskiy blog</Typography>
          <Link to="/login" className="rdr-link">
            Login
          </Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" className="mrg-container">
        <Grid container spacing={6}>
          {posts.map(item => {
            return (
              <BlogItem
                key={item.id}
                title={item.title}
                description={item.description}
                user={item.user}
                date={item.date}
              />
            );
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = ({ blogReducer: { posts } }) => ({
  posts
});

export default connect(mapStateToProps)(Blog);
