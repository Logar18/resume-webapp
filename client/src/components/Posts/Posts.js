import React from 'react';
import Post from './post/post';
import { useSelector } from 'react-redux';


import useStyles from './styles';
import { Grid, CircularProgress } from '@material-ui/core';

const Posts = ({ setCurrID }) => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    return (
        !posts.length ? <CircularProgress /> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts.map((post, index) => (
              <Grid key={index} item xs={12} sm={3} md={6}>
                <Post post={post} setCurrID={setCurrID}/>
              </Grid>
            ))}
          </Grid>
        )
      );
    
}
 
export default Posts;