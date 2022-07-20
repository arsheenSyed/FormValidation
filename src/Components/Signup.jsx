import React, { useState } from "react";

const SignUp = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    pattern: "",
    errorMessage: "",
    confirmPassword: "",
  });

  return (
    <div className="signup p-5" styles={"padding: 15px"}>
      <h3>SignUp</h3>
    </div>
  );
};

export default SignUp;
