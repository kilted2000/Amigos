// pages/api/profile.js

let profileData = {
    name: 'John Doe',
    dogName: 'Buddy',
    bio: 'Dog lover and enthusiast!',
  };
  
  export default function handler(req, res) {
    if (req.method === 'GET') {
      // Retrieve profile data
      res.status(200).json(profileData);
    } else if (req.method === 'PUT') {
      // Update profile data
      profileData = req.body;
      res.status(200).json({ message: 'Profile updated successfully.' });
    } else {
      res.status(405).json({ message: 'Method not allowed.' });
    }
  }
  