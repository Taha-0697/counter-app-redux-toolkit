import { useSelector, useDispatch } from "react-redux";
import { decrement, increment ,reset } from "./../redux/counter";

const Counter = () => {
    const { countValue } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <>
        <section style={{ margin: "4rem 0" }}>
          <h2>Counter</h2>
          <h1>{countValue}</h1>
          <button className="btn" onClick={()=> dispatch(increment)}>
            Increase
          </button>
          <button className="btn" onClick={()=> dispatch(reset)}>
            Reset
          </button>
          <button className="btn" onClick={()=> dispatch(decrement)}>
            Decrease
          </button>
        </section>
      </>
    );
};

export default Counter;
