import React from 'react'
import { Table ,Button} from 'react-bootstrap';
import { books } from './Book';
import {ComponentA} from "./ComponentA"
import { ComponentB } from './ComponentB';

interface Props{
  books:books[],
  handleEdit:(params:{id:number,title:string,author:string,price:string})=>void,
  handleDelet:(id:number)=>void

}
export const ViewDetails = ({books,handleDelet,handleEdit}:Props) => {
  return (
    <div className='container-view'>



      <Table>
        <thead>
          <tr>
            <th>title</th>
            <th>author</th>
            <th>price</th>
          </tr>

        </thead>
        <tbody>
          {books?.map((e: books) => (
            <>
              <tr key={e.id}>
                <td>{e.title}</td>
                <td>{e.author}</td>
                <td>{e.price}</td>
                <td> <Button onClick={()=>handleDelet(e.id)}> delete</Button></td>
                <td> <Button onClick={() => handleEdit(e)}> Edit</Button></td>


              </tr>
            </>

          ))}


        </tbody>
      </Table>

<div style={{marginBottom:"115px"}}>
<ComponentA/>
  </div>     

      <ComponentB/>
      

    </div>
  )
}
