import { useState } from "react";
import "./App.css";
import Users from "./components/Users";
import UsersForm from "./components/UsersForm";
import { v4 as uuid } from "uuid";

function App() {
  const users = [
    {
      id: uuid(),
      name: "Daniel",
      email: "daniel@email.com",
      gen: 24,
    },
    {
      id: uuid(),
      name: "Ali",
      email: "ali@email.com",
      gen: 26,
    },
    {
      id: uuid(),
      name: "Derick",
      email: "derick@email.com",
      gen: 18,
    },
  ];

  const [user, setUser] = useState(users);

  const handleAddUser = (newUser) => {
    setUser((prevUsers) => [...prevUsers, newUser]);
  };

  const handleDeleteUser = (id) => {
    setUser(user.filter((user) => user.id !== id));
  };

  const saveChanges = (id, update) => {
    setUser(
      user.map((item) => {
        if (item.id === id) {
          return update;
        }
        return item;
      })
    );
  };

  return (
    <div className="App">
      <div className="col-12">
        <div className="col-6">
          <UsersForm handleAddUser={handleAddUser} />
        </div>
        <div className="col-6">
          <Users
            saveChanges={saveChanges}
            users={user}
            onDelete={handleDeleteUser}
            editUser={saveChanges}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
