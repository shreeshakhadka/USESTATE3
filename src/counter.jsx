import React from "react";
import { useState } from "react";

function Counter(){
    const[count,setCount] = useState(0);
    return(
        <div>
        <h1> Current count : {count} </h1>
        <button onClick={() => setCount(count + 1)}>Increment
        </button>
        <button onClick={() => setCount(count - 3)}>Decrement
        </button>
        </div>
    );
}
export default Counter;