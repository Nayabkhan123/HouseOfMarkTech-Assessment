import React, { useEffect, useState } from 'react'

export const useDebounce = (value,delay=1000) => {
    const [debounceValue,setDebounceValue] = useState(value)
    useEffect(()=>{
        const id = setTimeout(()=>{
            setDebounceValue(value)
        },delay)
        return ()=>{
            clearTimeout(id)
        }
    },[value,delay])
  return debounceValue
}