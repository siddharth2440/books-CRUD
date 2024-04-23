import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const NewBook = () => {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [cover,setCover] = useState("");
    const navigate=useNavigate();
    const {state} = useLocation();
    const updateBook =async (e) =>{
        e.preventDefault();
        // console.log(location);
        const updateData = await axios.put("http://localhost:3002/update/"+state.id,{title,description,cover})
        if(!updateData){
            console.log("Couldn't able to upload data");
            return;
        }
        navigate("/")
        return;
    }
  return (
    <form onSubmit={updateBook} className='py-5 w-[80vw]'>
        <h1 className='text-[1.8rem] font-[600]'>Update Book</h1>
        <div className='flex mt-8 flex-col items-center justify-center gap-3'>
            <input type="text" className='px-2 py-1 outline-none border border-black rounded-sm w-[80%]' placeholder={state?.title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea name="" id="" cols="30" rows="10" className='px-2 py-1 outline-none border border-black rounded-sm w-[80%]' placeholder={state?.description} onChange={(e)=>setDescription(e.target.value)}></textarea>
            <input type="text" className='px-2 py-1 outline-none border border-black rounded-sm w-[80%]'  placeholder={state?.cover} onChange={(e)=>setCover(e.target.value)}/>
            <button type="submit" className='bg-blue-500 text-white px-2 py-1 rounded-md'>Update Book</button>
        </div>
    </form>
  )
}

export default NewBook