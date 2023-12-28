import React, { useState } from 'react'

export const useCounter = ():[number,()=>void,()=>void] => {
  const [count,SetCount]=useState<number>(0)


  const increment = () => {
    SetCount(count + 1);
  };

  const decrement = () => {
    SetCount(count - 1);
  };

  return [count,increment,decrement]
}
