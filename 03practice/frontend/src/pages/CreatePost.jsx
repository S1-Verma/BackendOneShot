import React from 'react';
import axios, { Axios } from 'axios'
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData =  new FormData(e.currentTarget) ;

        axios.post('http://localhost:3000/create-post', formData)
        .then((res) => {
            console.log(res.data);
        }).catch( err =>{
            console.log(err);
        })
        
        navigate('/')
    }

    return (
        <div>
            <form className='border rounded mx-auto p-4 flex flex-col gap-4  ' onSubmit={handleSubmit} >
                <input type="file" name='image' className='border ' />
                <input type="text" name='caption' placeholder='enter caption..' className='border px-4 py-1.5' />
                <button className='block border px-4 py-1.5 rounded-sm' > submit post </button>
            </form>
        </div>
    );
}

export default CreatePost;
