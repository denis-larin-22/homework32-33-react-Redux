import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector(store => store.count);

    const increment = () => {
        dispatch({ type: 'Increment', payload: 1 });
    }
    const decrement = () => {
        dispatch({ type: 'Decrement', payload: 1 });
    }
    const reset = () => {
        dispatch({ type: 'Reset' });
    }


    return (
        <div>
            <h2>Counter: {value.count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter;