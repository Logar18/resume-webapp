import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import Delete from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Share from '@material-ui/icons/Share';
import { deletePost, likePost } from '../../../actions/posts';

import useStyles from './styles';

const Post = ({ post , setCurrID }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    return (
        <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
        <div className={classes.overlay}>
        </div>
        <div className={classes.overlay2}>
          <Button style={{ color: 'white' }} size="small" onClick={() => setCurrID(post._id)}><MoreHorizIcon fontSize="default" /></Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => {post.repoUrl && window.open(post.repoUrl, '_blank')}}><Share fontSize="small"/>Source</Button>
          <Button size="small" color="primary" onClick={() => {dispatch(likePost(post._id))}}>View Info</Button>
          {/* <Button size="small" color="primary" onClick={() => {dispatch(deletePost(post._id))}}><Delete fontSize='small'/>Delete</Button> */}
          </CardActions>
        </Card>
     );
}
 
export default Post;

