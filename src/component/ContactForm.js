import React, { useState } from 'react'
import {TiArrowRightOutline} from 'react-icons/ti'
const ContactForm = () => {
    // storing formdata
    const [data,setData] = useState({
        name:"",
        email:"",
        message:"",
    })
    const changeHandler = (e)=>{
        const {name,value} = e.target
        setData((prev)=>{
            return {
                ...prev,[name]:value,
            }
        })
    }
  return (
    <div className='flex items-center md:justify-between flex-col md:flex-row mx-auto my-4 bg-blue-100'>
        <div className='flex items-center justify-center mx-auto md:flex-col'>
            <p className='text-4xl font-bold gap-6 text-white bg-blue-500 p-16 rounded-tr-3xl rounded-bl-3xl'>Contact Us </p>
        </div>
        {/* form  */}
        <form id='contact-us' className='flex flex-col p-4 md:w-[60%] w-full gap-3 justify-center'>
            <div className='flex flex-col'>
                <label htmlFor='name' className='text-lg font-semibold'>Name: </label>
                <input 
                    type='text' 
                    name='name'
                    placeholder='Enter your name'
                    value={data.name}
                    onChange={changeHandler}
                    className='text-lg p-2 border-2 rounded'
                />
            </div>
            <div className='flex flex-col'>
                <label htmlFor='email' className='text-lg font-semibold'>Email: </label>
                <input 
                    type='email' 
                    name='email'
                    placeholder='Enter your email'
                    value={data.email}
                    onChange={changeHandler}
                    className='text-lg p-2 border-2 rounded'
                />
            </div>
            <div className='flex flex-col'>
                <label htmlFor='message' className='text-lg font-semibold'>Message: </label>
                <textarea 
                    name='message'
                    value={data.message}
                    placeholder='Write your Message here'
                    onChange={changeHandler}
                    className='text-lg p-2 h-60 resize-none border-2 rounded' cols={10}>
                </textarea>
            </div>
            <button className='text-xl font-semibold px-5 py-2 bg-blue-700 hover:bg-blue-900 text-white w-fit self-end rounded-tr-xl rounded-bl-xl'>Submit</button>

        </form>
    </div>
  )
}

export default ContactForm