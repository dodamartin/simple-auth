import React from 'react';
import { useLocation } from 'react-router-dom';

const UserInformation = () => {
  const location = useLocation();
  const { email, photo } = location.state;

  return (
    <div className="user-information">
      <h1 className="user-information__title">User Information</h1>
      <div className="user-information__photo">
        {photo ? (
          <img src={`http://localhost:5000/uploads/${photo}`} alt="User Photo" />
        ) : (
          <div className="user-information__no-photo">No photo available for this user.</div>
        )}
      </div>
      <p className="user-information__email">{email}</p>
    </div>
  );
};

export default UserInformation;
