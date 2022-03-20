import React from 'react';

import {Button} from "@mui/material";

const PostItem = ({removePost, number, post}) => {

    return (
        <div className="post">
            <div className="post__content">
                <strong className="post__content-title">{number}. {post.title}</strong>
                <div className="post__content-text">
                    {post.body}
                </div>
            </div>
            <Button onClick={() => removePost(post)} size={"small"} variant="outlined" color="error">
                Delete
            </Button>
        </div>
    );
};

export default PostItem;