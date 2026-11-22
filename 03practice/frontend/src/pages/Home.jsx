import React from 'react';
import { useEffect } from 'react';
import Post from '../components/Post';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/posts/').then((res, rej) => {
            const { message, posts } = res.data;
            setPosts(posts)
        })
    }, [posts])

    return (
        <div className=' flex flex-col items-center p-5 border ' >
            <button className='border px-4 py-1 rounded mb-4 ' >
                <Link to={'/create-post'} >Create Post </Link>
            </button>

            <div className=' flex flex-col gap-3 ' >
                {posts.map((post) => <Post key={post._id} post={post} />)}
            </div>
        </div>
    );
}

export default Home;
