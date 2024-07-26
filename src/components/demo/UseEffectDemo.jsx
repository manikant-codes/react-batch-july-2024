import React, { useEffect, useState } from "react";

function UseEffectDemo() {
  const [users, setUsers] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, [count]);

  function increment() {
    setCount(count + 1);
  }

  if (!users) return <h1>No Users</h1>;

  console.log(count);

  return (
    <div className="p-8 grid grid-cols-4 gap-4">
      <div className="p-4 bg-slate-200 rounded">
        <button onClick={increment}>Increment</button>
      </div>
      {users.map((value, index) => {
        return (
          <div key={value.id} className="p-4 bg-slate-200 rounded">
            <p>{value.id}</p>
            <p>{value.name}</p>
            <p>{value.email}</p>
            <p>{value.phone}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UseEffectDemo;
