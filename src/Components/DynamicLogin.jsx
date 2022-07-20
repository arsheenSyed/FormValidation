import React, { useState } from "react";
import Input from "./input";
const DynamicLogin = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    pattern: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage:
        "Username should be 3 - 16 characters and shouldn't include any special characters",
      label: "username",
      pattern: "^[A_Za-z0-9]{3,16}",
      required: true,
    },

    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage: "Password is invalid",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      label: "Password",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>LogIn</h1>
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>submit</button>
      </form>
    </div>
  );
};

export default DynamicLogin;
