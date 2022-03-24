import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment, Reset } from "../actions";

function Header() {
    // @ts-ignore
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>hello</h1>
            <h2>The value of the counter is {counter}</h2>
            <h1>Hello</h1>
            <h2>
                Counter : {counter}
            </h2>
            <button onClick={() => dispatch(Increment())}> add 1</button>
            <button onClick={() => dispatch(Decrement())}> subtract 1</button>
            <button onClick={() => dispatch(Reset())}> reset </button>
        </div>

    )
}
export default Header