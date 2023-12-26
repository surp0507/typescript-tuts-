import { tab } from '@testing-library/user-event/dist/tab';
import React, { useEffect, useState } from 'react'
import { books } from './Book'



export const useCustomHook = (key:string,initalValue:books[]):[books[],React.Dispatch<React.SetStateAction<books[]>>] => {
  const [books,setBooks]=useState<books[]>(()=>{
    if(!initalValue) return 
    const data= localStorage.getItem(key)
  return data?JSON.parse(data):initalValue
  })

useEffect(()=>{
  if(books){
    localStorage.setItem(key,JSON.stringify(books))
  }

},[books])

  return [books,setBooks]
}
