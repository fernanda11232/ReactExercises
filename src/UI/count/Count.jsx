import React, { useState, useEffect } from 'react';
import './count.css';

export const Count = () => {

    const [count, setCount] = useState(0);
    const [style, setStyle] = useState('pink');

    useEffect (() => {
        if (count >= 10) {
            setStyle('pink')
        }else{
            setStyle('purple') 
        }
    },[count])

    return (

    
        <div className='container'>
            <p className={style}>{count}</p>
            <button onClick={( )=> setCount(count+1)}>Add</button>
            <button onClick={( )=> setCount(0)}>Reset</button>
            <button onClick={( )=> setCount(count-1)}>substract</button>
        </div>

)
}
