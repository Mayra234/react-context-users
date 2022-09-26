import React, { useContext } from 'react';
import { UserContext } from '../context/user/UserContext';

export const Profile = () => {
  const { selectedUser } = useContext(UserContext);
  return (
    <>
      {selectedUser ? (
        <div className="card card-body text-center">
          <img
            src={selectedUser.avatar}
            className="card-img-top rounder-circle m-auto img-fluid"
            style={{ width: 200 }}
          />
          <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
          <h3>email: {selectedUser.email}</h3>
        </div>
      ) : (
        <h1>No hay usuario seleccionado</h1>
      )}
    </>
  );
};
