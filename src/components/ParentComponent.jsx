import { useState, useMemo, useCallback, memo } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Empty dependency array since it doesn't depend on any values

  return ( 
  <>
    <h1>Count: {count}</h1>
    <ChildComponent onClick={handleClick} />
    </>
    )
}

export default ParentComponent