import React, { useState } from 'react'
import { useCounter } from './useCounter'

export const ComponentB = () => {
  const [count,increment,decrement]=useCounter()

  
  return (
    <div>
      <p>count in Component-B {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
