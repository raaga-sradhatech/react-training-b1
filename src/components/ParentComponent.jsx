import { useState, useMemo, useCallback, memo } from 'react';
import { useDispatch , useSelector } from "react-redux";
import { decrement, increment } from "../Store/Reducer";
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const count = useSelector((state) => state.counter.value);
  return ( 
  <>
    <h1>Count: {count}</h1>
    </>
    )
}

export default ParentComponent