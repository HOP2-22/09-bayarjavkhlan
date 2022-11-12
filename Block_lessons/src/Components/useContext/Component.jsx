import { useState } from "react";

export default function Component() {
  const [user, setUser] = useState("asbdasbhjsabdaj");

  const Setter = (value) => {
    setUser(value);
  };
  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} Setter={Setter} />
    </>
  );
}
function Component2({ user, Setter }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} Setter={Setter} />
    </>
  );
}

function Component3({ user, Setter }) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} Setter={Setter} />
    </>
  );
}

function Component4({ user, Setter }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} Setter={Setter} />
    </>
  );
}

function Component5({ user, Setter }) {
  return (
    <>
      <h1>Component 5</h1>
      <button onClick={Setter("10101")}>ahsdjahdajkssj</button>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
