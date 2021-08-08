import React, { Component } from "react";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        console.log("users:", users);
        this.setState({ users: users });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h2>Title</h2>
        <p>A very long boby</p>
        <hr />

        <div>
          {this.state.users.map((user) => (
            <div>
              <p>{user.username}</p>
              <p> {user.email}</p>
              <p>{user.website} </p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Users;
