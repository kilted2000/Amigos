// components/ProfileForm.js

import { useState, useEffect } from 'react';
//intigrate MongoDB here

const ProfileForm = () => {
  const [name, setName] = useState('');
  const [dogName, setDogName] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    fetch('/api/profile')
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setDogName(data.dogName);
        setBio(data.bio);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedProfile = { name, dogName, bio };

    fetch('/api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProfile),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Dog's Name:
        <input type="text" value={dogName} onChange={(e) => setDogName(e.target.value)} />
      </label>
      <label>
        Bio:
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
      </label>
      <button type="submit">Save Profile</button>
    </form>
  );
};

export default ProfileForm;
