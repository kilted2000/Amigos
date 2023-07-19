// import dbConnect from '../../lib/db-connect';

// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//         // Retrieve profile data
//         res.status(400).json({ message: 'invalid request type'});
//     }

//     await dbConnect();

//     const { name, dogName } = req.body;

//     console.log('Name:', name);
//     console.log('Dog Name:', dogName);

//     res.status(200).json({ name, dogName });
//     }

import { dbConnect } from '../../lib/db-connect';

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      res.status(400).json({ message: 'Invalid request type' });
      return;
    }

    await dbConnect();

    const { name, dogName } = req.body;

    console.log('Name:', name);
    console.log('Dog Name:', dogName);

    res.status(200).json({ name, dogName });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
