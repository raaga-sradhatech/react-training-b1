import React, { memo } from 'react';
const ChildComponent = memo(function ChildComponent({ onClick }) {
  console.log('Child component rendered');
  return <button onClick={onClick}>Click me</button>;
});

export default ChildComponent;
