import axios from 'axios';
import React from 'react';

const Post = ({ post }) => {

    const handleDelete = () => {
        // useEffect yahan se hata diya gaya hai
        axios.delete(`http://localhost:3000/posts/${post._id}`)
            .then((res) => {
                console.log(res.data);
                // Note: Delete hone ke baad UI ko update karne ke liye 
                // parent component se koi callback function pass karna pad sakta hai.
            })
            .catch((err) => { 
                console.log(err); 
            });
    }

    return (
        <div className='max-w-full p-2 text-center border rounded'>
            <img className='min-h-[250px] w-full mb-2' src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
            <button onClick={handleDelete} className='border px-4 rounded-sm'>Delete</button>
        </div>
    );
}

export default Post;