import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log("useeffect")
    return () => {
      console.log("Cleaned up useEffect");
    };
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked {count} times
    </button>
  );
};

export default UseEffect;
