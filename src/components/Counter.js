import React, {useState} from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(prevState => prevState + 1)
    }

    function decrement() {
        setCount(prevState => prevState - 1)
    }

    return (
        <div>
            <h1>{count}</h1>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Disable</button>
        </div>
    );
};

export default Counter;