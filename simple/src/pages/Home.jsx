import React,{useEffect, useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [booksData,setBookData] = useState(null);
    const navigate = useNavigate();
    const fetchBooks =async ()=>{
        const {data} = await axios.get("http://localhost:3002/");
        if(data) setBookData(data)
        return;
    }

    const newHandler = () =>{
        navigate("/addNew");        
    }

    const deleteHandler =async (id) =>{
        const deleteData = await axios.delete(`http://localhost:3002/delete/${id}`);
        if(deleteData){
            window.location.reload();
            return;
        }
        console.log(id+"is not deleted");
    }

    const update = (el) =>{
        // console.log(el);    
        navigate("/update",{state:el})
    }
    useEffect(()=>{
        fetchBooks();
    },[]);
  return (
    <div>
        <h1 className="text-[2rem] font-[600]">Lama Book Shop</h1>
        <div className="grid grid-cols-3 gap-5 mt-[1rem] max-h-[100vh]relative">
            {
                booksData && booksData.map((el,idx)=>{
                    return(
                        <div key={el.id} className="py-3 h-[100%] rounded-lg flex flex-col  items-center justify-center">
                            <img src={"https://images.blinkist.io/images/books/55bf590e6364610007240000/1_1/470.jpg" || el.cover} className="h-[10rem]"/>
                            <h1 className="text-[1.2rem] mt-2 capitalize font-[700]">{el?.title}</h1>
                            <p className="text-[0.8rem] mt-2">{el?.description}</p>
                            <div className="flex items-center justify-center gap-3">
                                <button className="mt-4 text-[0.7rem] px-2 py-1 rounded-md text-white bg-red-500" onClick={()=>deleteHandler(el.id)}>Delete</button>
                                <button className="mt-4 px-2 py-1 text-[0.7rem] rounded-md text-white bg-green-500" onClick={()=>update(el)}>Update</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <button className="mt-[2rem] px-2 py-1 rounded-md text-white bg-blue-500" onClick={newHandler}>Add New Book</button>
    </div>
  )
}

export default Home;