import { useSelector, useDispatch } from "react-redux";
import { decrement, increment ,reset } from "./redux/counter";

const App = () => {
    const { countValue } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div style={{ textAlign: "center" }}>
            <h1>The Count is : {countValue}</h1>
            <button onClick={() => dispatch(increment()) }>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default App;
