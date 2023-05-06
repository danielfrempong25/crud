import EditUsersForm from "./EditUsersForm";
import { useState } from "react";

const Users = ({ users, onDelete, editUser, saveChanges }) => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(!showModal);
  };

  const handleModalClose = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="grid">
      {users.map((user, index) => {
        return (
          <div className="card" key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.gen}</p>
            <div className="editDelete">
              <button onClick={handleButtonClick}>Edit</button>
              {showModal && (
                <EditUsersForm
                  modalClose={handleModalClose}
                  editUser={editUser}
                  user={user}
                  saveChanges={saveChanges}
                />
              )}
              <button onClick={() => onDelete(user.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Users;
