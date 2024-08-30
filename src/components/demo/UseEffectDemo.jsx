import React, { useEffect, useState } from "react";

function UseEffectDemo() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // document.getElementById("mydiv").style.color = "red";
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div id="mydiv">
      <p>
        {users.map((user) => {
          return (
            <p>
              {user.id}. {user.name}
            </p>
          );
        })}
      </p>
    </div>
  );
}

export default UseEffectDemo;
