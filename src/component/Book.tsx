import { isEditable } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react'
import { Table ,Button} from 'react-bootstrap';
import { useCustomHook } from './useCustomHook';
import { ViewDetails } from './ViewDetails';


export interface books{
  id:number;
  title:string;
  author:string;
  price:string;
}

type value= {
  title:string;
  author:string;
  price:string
}

  

 const Demo = () => {
  // const [books,setBooks]=useState<books[]>([])
  const [books,setBooks]= useCustomHook("key",[])
  const [id,setId]=useState<number>()
  const [value,setValue]= useState<value>({
    title:"",
    author:"",
    price:""
  })
  


 

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const {title,author,price}=value
    if(id){
  
         let index = books.findIndex(e=>e.id===id)
   
         books[index]={...books[index],title:title,author:author,price:price}
        
         setBooks([...books])
    }else{
      if(title!==""&&author!==""&&price!==""){
        setBooks([...books,{id:Math.random(),title:title,author:author,price:price}])
  
      }
    }
    
    
  }

  const handleDelet=(id:number)=>{
     const deletedData= books.filter(item=>item.id!==id)
     setBooks(deletedData)

  }

  const handleEdit = (item:books) =>{
     const {title,author,price,id} = item
     setValue({...value,title:title,author:author,price:price})
     setId(id)
 

  }
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name}= e.target
    setValue({
      ...value,
      [name]:e.target.value
    })

  }

  return (
    <div>
      <h1 style={{margin:"0px 160px"}}> Books </h1> 
      <div>

      </div> 
        <div className='form-container'>
     <form onSubmit={handleSubmit} className="form-group">
      <label>title</label>
        <input type="text" name="title" className='form-control'  value={value.title} onChange={(e)=>handleChange(e)}/>
        <label>author</label>
         <input type="text" name="author" className='form-control' value={value.author} onChange={(e)=>handleChange(e)}/>
         <label>price</label>
        <input type="text" name="price" className='form-control' value={value.price}onChange={(e)=>handleChange(e)}/>
      
     { id ?
     <Button type='submit'>update book</Button>
     :
     <Button type='submit'> add book</Button>
     
    }
     
     </form>
   </div>

<ViewDetails books={books} handleEdit={handleEdit}  handleDelet={handleDelet}/>
        
       

    </div>
  )
}

export default Demo;






















