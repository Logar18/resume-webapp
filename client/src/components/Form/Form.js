import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

import useStyles from './styles';

const Form = ({currID, setCurrID }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [formMessage, setFormMessage] = useState("");
    const posts = useSelector(state => state.posts);
    const post = posts.find((p) => p._id === currID)
    const [postData, setPostData] = useState({
        repoUrl: "",
        title: "",
        message: "",
        tags: [],
        selectedFile: ""});
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(postData.title === "") 
        {
            setFormMessage("Title field is required!")
        }
        else if(currID) {
            console.log("dispatching update:")
            dispatch(updatePost(currID, postData))
        }
        else {
            dispatch(createPost(postData));

        }
        clear();
    }

    const clear = () => {
        setPostData({ repoUrl: '', title: '', message: '', tags: '', selectedFile: '' });
        setCurrID(0);
    }

    useEffect(() => {
        if(post) {
            setPostData(post);
        }
    }, [currID, post])

    return ( 
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6"> {currID ? 'Edit' : 'Add'} a Project</Typography>
                <TextField
                    required
                    name="repoUrl" 
                    variant="outlined" 
                    label="Repository URL" 
                    fullWidth
                    value={postData.repoUrl}
                    onChange={(e) => setPostData({ ...postData, repoUrl: e.target.value})}
                />
                <TextField
                    required
                    name="title" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value})}
                />
                <TextField
                    variant="outlined"
                    name="message" 
                    label="Message" 
                    multiline
                    fullWidth
                    rows={3}
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value})}
                />
                <TextField
                    name="tags" 
                    variant="outlined" 
                    label="Tags (separated by spaces)" 
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(', ')})}
                />
                <div className={classes.fileInput}>
                    <FileBase
                    type="file"
                    multiple={false}
                    onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
     );
}
 
export default Form;