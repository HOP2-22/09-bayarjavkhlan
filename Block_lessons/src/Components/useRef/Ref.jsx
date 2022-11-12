import React, { useEffect, useRef, useState } from "react";

const Ref = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div className="w-full pt-64 flex flex-col items-center">
      <input
        value={name}
        className="border rounded pl-2"
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <div>i rendered times {renderCount.current}</div>
    </div>
  );
};

export default Ref;
