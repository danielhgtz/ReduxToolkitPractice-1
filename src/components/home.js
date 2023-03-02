import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/counter";

function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home</h1>
      <h1>Count {count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>

      <button
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
      >
        +10
      </button>
    </div>
  );
}

export default Home;
