import React from 'react'
import { useState, useEffect } from 'react'
import PostModel from '../interfaces/post';
import axios from 'axios';
import { create } from 'domain';

export const usePosts = () => {
    const [posts, setPosts] = useState<PostModel[]>()


    const getPosts = () => {
        axios.get("http://localhost:5000/posts").then((res) => {
            setPosts(res.data) 
         })
    }
    // `${process.env.URL}/posts`
    useEffect(() => {
        getPosts()
    }, [])

    const createPost = (title: string, content: string) => {
        axios.post('http://localhost:5000/posts', {title, content}).then((res) => {
        getPosts()
        })
    }

    return {posts, create:createPost}
    
}



const Posts: React.FC = () => {
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const {posts, create} = usePosts()
    
  return (
    <div>
        <div className='add-form'>
            <h1>Create a post</h1>
            <input
                value={title} 
                className='create-input'
                type="text" 
                placeholder='Title' 
                onChange={(e) => {
                    setTitle(e.target.value)
        }}/>
                <input
                value={content}
                className='create-input'
                type="text" 
                placeholder='Content' 
                onChange={(e) => {
                    setContent(e.target.value)
        }}/>
        <button className='create-button' onClick={ () => create(title, content)}>Create</button>
        </div>
        <ul className='posts-list'>
            {posts?.map(post => (
                <li key={post._id}>
                    <h5>{post.title}</h5>
                    <p>{post.content}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Posts