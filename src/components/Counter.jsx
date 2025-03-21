import { useDispatch , useSelector } from "react-redux";
import { decrement, increment } from "../Store/Reducer";
function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  
    return (
      <div>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    );
  }
  export default Counter;