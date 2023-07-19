// pages/api/profile.js

// let profileData = {
//     name: 'John Doe',
//     dogName: 'Buddy',
//     bio: 'Dog lover and enthusiast!',
//   };

 

  export default async function handler(req, res) {
    if (req.method === 'GET') {
      // Retrieve profile data
      //res.status(200).json(profileData);
      await dbConnect();
    } else if (req.method === 'PUT') {
      // Update profile data
      profileData = req.body;
      res.status(200).json({ message: 'Profile updated successfully.' });
    } else {
      res.status(405).json({ message: 'Method not allowed.' });
    }
    
  }
  