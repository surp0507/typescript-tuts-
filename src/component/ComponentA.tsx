import React ,{useState}from 'react'
import { useCounter } from './useCounter'


export const ComponentA = () => {
  const [count,increment,decrement]=useCounter()

 
  return (
    <div>
      <p>count in Component-A {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
