
"use client"
//import React from 'react';

import { useState } from 'react';

export default function Register() {
  const [address, setAddress] = useState('');

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, including geocoding and storing user location
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Address:
        <input type="text" value={address} onChange={handleAddressChange} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}
