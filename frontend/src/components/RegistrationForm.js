import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = (onRegister) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      formData.append('photo', photo);

      const response = await axios.post('http://localhost:5000/api/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.message === 'Registration successful') {
        window.location.reload();
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage('Registration failed. Please try again.');
      console.error(error);
    }
  };

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
  };

  const photoStyle = photo
  ? {
      backgroundImage: `url(${URL.createObjectURL(photo)})`,
      backgroundSize: 'cover', // or 'contain', depending on your preference
      backgroundPosition: 'center', // adjust as needed
      backgroundRepeat: 'no-repeat',
    }
  : {
      backgroundImage: `url(${require('./photo/avatar.png')})`,
      backgroundSize: '70px', // or 'contain', depending on your preference
      backgroundPosition: 'center', // adjust as needed
      backgroundRepeat: 'no-repeat',
    };
  return (
    <div className='container'>
      <h2 className='title'>Registration</h2>
      <div className="photo-upload">
        <label htmlFor="photo" className="photo-label">
          <input
            type="file"
            accept="image/*"
            id="photo"
            onChange={handlePhotoChange}
            className='photo-input'
          />
          <span className="photo-icon" style={photoStyle}></span>
        </label>
      </div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='input-field'
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='input-field'
        required
      />
      <button onClick={handleRegister} className='button'>
        Register
      </button>
      {message && <p className='message'>{message}</p>}
    </div>
  );
};

export default RegistrationForm
