import React, {useState} from 'react';

import {Button, TextField} from "@mui/material";

const PostForm = ({addPost}) => {
    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    const addNewPost = (event) => {
        event.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }
        addPost(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form className="form">
            <TextField
                value={post.title}
                onChange={event => setPost({...post, title: event.target.value})}
                id="outlined-basic" label="Title" variant="outlined" margin={"normal"}/>
            <TextField
                value={post.body}
                onChange={event => setPost({...post, body: event.target.value})}
                style={{marginBottom: '15px'}} fullWidth label="Description" id="fullWidth"/>
            <Button type={"submit"} onClick={addNewPost} variant="contained" color="success">
                Post
            </Button>
        </form>
    );
};

export default PostForm;