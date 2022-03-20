import React from 'react';
import MySelect from "./UI/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div style={{maxWidth: "500px"}}>
            <input value={filter.query} onChange={event => setFilter({...filter, query: event.target.value})}
                   type="text"
                   placeholder={"Search"} style={{display: 'block', width: '97%', padding: '10px 5px'}}/>
            <MySelect defaultValue={"Sort By"} value={filter.sort}
                      onChange={selectedSort => setFilter({...filter, sort: selectedSort})} options={[
                {value: 'title', name: 'By title'},
                {value: 'body', name: 'By description'},
            ]}/>
        </div>
    );
};

export default PostFilter;