import React, { useState } from "react";

function FetchDemo() {
  const [users, setUsers] = useState(null);

  if (!users) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  return (
    <div>
      {users?.map((value) => {
        return <p>{value.name}</p>;
      })}
    </div>
  );
}

export default FetchDemo;
