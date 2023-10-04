// pages/profile.js
import React from 'react';
import ProfileForm from '../../components/ProfileForm';
import Link from 'next/link';

const ProfilePage = () => {
  return (
    <div>
      <h1>Create or Edit Your Profile</h1>
      <ProfileForm  />
      <Link href="/">Home</Link>
    </div>
  );
};

// export async function getServerSideProps() {
//   try { 
//   const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`, {
//     headers: {
//       Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
//     } 
//   });
  
//   if (!response.ok) {
//     throw new Error('API requested failed');
//   }

//   const results = await response.json();
//   const { resources } = results;
//   const images = resources.map(resource => {
//     const { width, height } = resource;
//     return {
//       id: resource.asset_id,
//       title: resource.public_id,
//       image: resource.secure_url,
//       width,
//       height
//     };
//   });

//   return {
//     props: {
//       images
//     },
//   };
// } catch (error) {
//   console.error('Error fetching data:', error);
//   return {
//     props: {
//       images: [],
//     },
//   };
// }
// }

export default ProfilePage;

