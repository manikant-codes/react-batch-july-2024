import React, { useState } from "react";

function FetchDemo() {
  const [users, setUsers] = useState(null);
  const promise = fetch("https://jsonplaceholder.typicode.com/users");
  console.log("promise", promise);
  console.log(
    "result",
    promise
      .then((response) => {
        console.log("response", response);
        const jsonRes = response.json();
        jsonRes
          .then((data) => {
            console.log("data", data);
            if (!users) {
              setUsers(data);
            }
          })
          .catch((error) => {
            console.log("error", error);
          });
      })
      .catch((error) => {
        console.log("error", error);
      })
  );

  console.log("users", users);

  return (
    <div>
      {users?.map((value) => {
        return <p>{value.name}</p>;
      })}
    </div>
  );
}

export default FetchDemo;
