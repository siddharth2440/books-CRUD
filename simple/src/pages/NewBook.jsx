import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const NewBook = () => {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [cover,setCover] = useState("");
    const navigate=useNavigate();
    const addBook =async (e) =>{
        e.preventDefault();
        const uploadData = await axios.post("http://localhost:3002/post",{title,description,cover})
        if(!uploadData){
            console.log("Couldn't able to upload data");
            return;
        }
        navigate("/")
        return;
    }
  return (
    <form onSubmit={addBook} className='py-5 w-[80vw]'>
        <h1 className='text-[1.8rem] font-[600]'>Add New Book</h1>
        <div className='flex mt-8 flex-col items-center justify-center gap-3'>
            <input type="text" className='px-2 py-1 outline-none border border-black rounded-sm w-[80%]' placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
            <textarea name="" id="" cols="30" rows="10" className='px-2 py-1 outline-none border border-black rounded-sm w-[80%]' placeholder='Description' onChange={(e)=>setDescription(e.target.value)}></textarea>
            <input type="text" className='px-2 py-1 outline-none border border-black rounded-sm w-[80%]' placeholder="Cover" onChange={(e)=>setCover(e.target.value)}/>
            <button type="submit" className='bg-blue-500 text-white px-2 py-1 rounded-md'>Add Book</button>
        </div>
    </form>
  )
}

export default NewBook