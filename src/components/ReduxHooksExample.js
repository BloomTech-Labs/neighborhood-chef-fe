//redux hooks example component

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../utilities/actions";

const ReduxHooksExample = () => {
  const count = useSelector((state) => state.counter); //sets a new variable named count to the current state object value of 'counter', as seen in reducers index.js file
  const dispatch = useDispatch(); //brings in the use of 'dispatch' directly within component, as seen on line 15

  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <button onClick={() => dispatch(increment())}>INCREMENT</button>
      </div>
    </div>
  );
};

export default ReduxHooksExample;
