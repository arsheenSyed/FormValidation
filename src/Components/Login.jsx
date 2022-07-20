import React from "react";

class LogIn extends React.Component {
  state = {
    isTrue: false,
  };

  // handleFunction() {
  //   this.setstate({ isTrue: true });
  // }

  render() {
    return (
      <div className="login p-5">
        <h3>Login</h3>

        <hr className="light" />
        <form className="pt-3">
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LogIn;
