import React, { Component } from "react";

class AddUser extends Component {
  state = {
    email: "",
    name: "",
    password: ""
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <div className="container">
              <div className="col-md-10" />
              <div className="col-md-2">
                <button
                  type="submit"
                  className="btn btn-sm btn-primary btn-block"
                >
                  Logout!
                </button>
              </div>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 font-weight-normal">Add User</h1>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Enter your Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter your Name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="accountType">Type:</label>
                <select name="accountType" className="form-control">
                  <option value="manager">Manager</option>
                  <option value="trainee">Trainee</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Add!
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddUser;
