import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () =>{
    setCount(count+ 1);
  };
  const decrement = () =>{
setCount(count- 1);
};

  return (
 

    <center>
      <center>
<h1>Contador de numeros</h1>
</center>
<hr>
</hr>
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Sumar</button>
      <button onClick={decrement}>Restar</button>
    </div>
    </center>
  );

}

export default Counter;