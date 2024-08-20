import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);

  function handleSubmit(e) {
    e.preventDefault();
    // let response = { success: false, msg: "Invalid credentials." };
    let response = { success: true, msg: "User logged in." };
    if (response.success) {
      setUser("ram");
      navigate("/dashboard");
    } else {
      setUser(null);
      //   alert(response.msg);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" name="name" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
