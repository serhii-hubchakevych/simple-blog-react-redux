import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import './blog-item.css'

const BlogItem = props => {

  const {title, description, user, date} = props;

  return (
    <React.Fragment>
      <Grid item xs={12} sm={6} md={6}>
        <Card variant="outlined">
          <CardContent>
            <Typography className="post-title" variant="h5" color="textSecondary" gutterBottom>
              {title}
            </Typography>
            <Typography color="textSecondary" gutterBottom>{user}</Typography>
            <Typography color="textSecondary" gutterBottom>{date}</Typography>
            <Typography variant="body2" component="p">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

export default BlogItem;
