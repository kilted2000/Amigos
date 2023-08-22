// pages/profile.js
import React from 'react';
import ProfileForm from '../components/ProfileForm';
import Link from 'next/link';
const ProfilePage = () => {
  return (
    <div>
      <h1>Create or Edit Your Profile</h1>
      <ProfileForm />
      
      <Link href="/">Home</Link>
    </div>
  );
};

export default ProfilePage;

