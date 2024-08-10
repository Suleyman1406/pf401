import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { useRef } from "react";

export const Counter = () => {
  const { value: count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const inputRef = useRef();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <input ref={inputRef} type="number" />
        <button
          onClick={() => dispatch(incrementByAmount(+inputRef.current.value))}
        >
          Increment By Amount
        </button>
      </div>
    </div>
  );
};
