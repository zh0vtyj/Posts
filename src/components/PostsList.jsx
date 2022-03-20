import React from 'react';

import PostItem from "./PostItem";

const PostsList = ({posts, removePost}) => {
    if (!posts.length) {
        return <h2 style={{textAlign: 'center'}}>Posts are not found</h2>
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Posts List</h1>
            {posts.map((post, index) => <PostItem removePost={removePost} number={index + 1} post={post} key={post.id}/>)}
        </div>
    );
};

export default PostsList;