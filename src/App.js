import {useMemo, useState} from "react";

import './App.css';

import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/MySelect";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'The best programming language'},
        {id: 2, title: 'Python', body: 'The fuck programming language'},
        {id: 3, title: 'Assembler', body: 'what'},
        {id: 4, title: 'c', body: 'lol'}
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
        console.log("HI")
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        } else return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, posts])

    const addNewPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm addPost={addNewPost}/>
            <hr style={{margin: "10px 0"}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostsList posts={sortedAndSearchedPosts} removePost={removePost}/>
        </div>
    );
}

export default App;
