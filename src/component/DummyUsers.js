import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'

const DummyUsers = () => {
    const [data,setData] = useState([])
    const [search,setSearch] = useState("")
    const debounceValue = useDebounce(search,1000)
    const fetchusers = async()=>{
        try{
            const apiresponse = await axios(`https://jsonplaceholder.typicode.com/users?${search==="" ? "" :`q=${search}`}`)
            setData(apiresponse?.data)
        }
        catch(err){
            console.log("Error while fetching users",err)
        }
    }
    const changeHandler = (e)=>{
        setSearch(e.target.value)
    }
    useEffect(()=>{
        fetchusers()
    },[debounceValue])
    console.log("first",search)
  return (
    <div id='users' className='my-16'>
        <h2 className='text-4xl font-bold mb-6'>Dummy Users Data: </h2>
        <div className='w-full flex gap-2 items-center justify-center p-4 text-xl'>
            <label htmlFor='search'>Search:  </label>
            <input 
                type='text' 
                name='search' 
                value={search} 
                placeholder='Enter to search'
                onChange={changeHandler}
                className='w-1/2 px-4 py-2 border-2'
            />
        </div>
        {
            data?.length===0 && 
            <div className='text-center min-h-[400px] self-center my-auto flex items-center justify-center border-2'>
                <p className='text-2xl font-medium'>No Result Found</p>
            </div>
        }
        {
            data?.length!==0 &&
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-h-[500px] border-2 gap-8 overflow-y-auto p-6'>
                {
                    data?.map((user)=>{
                        return (
                            <div className='border-2 p-6 rounded-xl hover:shadow-xl hover:bg-gray-400 hover:scale-105 hover:-rotate-3 hover:text-white cursor-pointer duration-200 transition-all'>
                                <h3 className='text-2xl text-center underline font-bold mb-2'>{user?.name}</h3>
                                <p className='font-medium'>Username: <span className='font-normal'>{user?.username}</span></p>
                                <p className='font-medium'>Email: <span className='font-normal'>{user?.email}</span></p>
                                <p className='font-medium'>Phone: <span className='font-normal'>{user?.phone}</span></p>   
                                <p className='font-medium mb-2'>Website: <span className='font-normal'>{user?.website}</span></p>
                                <h4 className='font-semibold text-lg'>Address: </h4>
                                <p className='font-medium'>Street: <span className='font-normal'>{user?.address?.street}</span></p>
                                <p className='font-medium mb-2'>City: <span className='font-normal'>{user?.address?.city}</span></p>   
                                
                                <p className='font-medium'>Company: </p>
                                <p className='font-medium'>Name: <span className='font-normal'>{user?.company?.name}</span></p>  
                                <p className='font-medium'>catchPhrase: <span className='font-normal'>{user?.company?.catchPhrase}</span></p>                
                            </div>
                        )
                    })
                }
            </div>
        }
    </div>
  )
}

export default DummyUsers