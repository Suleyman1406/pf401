import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  selectCount,
  selectStatus,
  incrementIfOdd,
} from "./counterSlice";

import styles from "./Counter.module.css";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const status = useSelector(selectStatus);
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <span aria-label="Count" className={styles.value}>
          {count}
        </span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          type="number"
          onChange={(e) => {
            setIncrementAmount(e.target.value);
          }}
        />
        <button
          className={styles.button}
          onClick={() => {
            dispatch(incrementByAmount(incrementValue));
          }}
        >
          Add Amount
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.asyncButton}
          disabled={status !== "idle"}
          onClick={() => {
            dispatch(incrementAsync(incrementValue));
          }}
        >
          Add Async
        </button>
        <button
          className={styles.oddButton}
          onClick={() => {
            dispatch(incrementIfOdd(incrementValue));
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};