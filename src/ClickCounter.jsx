import React, { useState, useEffect } from 'react';

const ClickCounter = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p data-testid="click-counter-text">You clicked {count} times</p>
      <button data-testid="click-counter-button" onClick={() => setCount(count => count + 1)}>
        Click Me
      </button>
    </div>
  )
}

export default ClickCounter;
