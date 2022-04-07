import { Table, Button } from "react-bootstrap";
import UserDataService from "../Services/user.services";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = ({ getUserID }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const data = await UserDataService.getALLUsers();
    console.log(data.docs);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await UserDataService.deleteUser(id);
    getUser();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getUser}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(users, undefined, 3)}</pre> */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Cardio</th>
            <th>Weights</th>
            <th>Boxing</th>
            <th>Fee</th>
          </tr>
        </thead>
        <tbody>
          {users.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.Name}</td>
                <td>{doc.Age}</td>
                <td>{doc.Sex}</td>
                <td>{doc.Height}</td>
                <td>{doc.Weight}</td>
                <td>{doc.Phone}</td>
                <td>{doc.Email}</td>
                <td>{doc.Cardio}</td>
                <td>{doc.Weights}</td>
                <td>{doc.Boxing}</td>
                <td>{doc.Fee}</td>
                <td>
                  <Link to={`/update/&{id}`}>
                    <Button
                      variant="secondary"
                      className="edit"
                      onClick={(e) => getUserID(doc.id)}
                    >
                      Edit
                    </Button>
                  </Link>

                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default UserList;
