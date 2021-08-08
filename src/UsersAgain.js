import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const UsersAgain = () => {
  let myUsers = [];
  const [user, setUsers] = useState(myUsers);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <h2>This is functional User API</h2>
      <hr />
      <div>
        {user.map((users) => (
          <div style={{ textAlign: "center" }} responsive>
            <Table striped bordered hover size="sm" responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Website</th>
                  <th>address</th>
                 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{users.id}</td>
                  <td> {users.name}</td>
                  <td> {users.username}</td>
                  <td>{users.email}</td>
                  <td>{users.website}</td>
                  <td>{users.address.street}</td>
                </tr>
              </tbody>
            </Table>
            {/* <p>{users.username}</p>
            <p> {users.email}</p>
            <p>{users.website} </p> */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default UsersAgain;
