// components/ProfileForm.js
'use client'
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
//     <form className="row g-3">
//   <div className="col-md-4">
//     <label for="validationServer01" className="form-label">First name</label>
//     <input type="text" className="form-control is-valid" id="validationServer01" value="Mark" required />
//     <div className="valid-feedback">
//       Looks good!
//     </div>
//   </div>
//   <div className="col-md-4">
//     <label for="validationServer02" class="form-label">Last name</label>
//     <input type="text" className="form-control is-valid" id="validationServer02" value="Otto" required />
//     <div className="valid-feedback">
//       Looks good!
//     </div>
//   </div>
//   <div className="col-md-6">
//     <label for="validationServer03" className="form-label">City</label>
//     <input type="text" className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
//     <div id="validationServer03Feedback" className="invalid-feedback">
//       Please provide a valid city.
//     </div>
//   </div>
//   <div className="col-md-3">
//     <label for="validationServer04" className="form-label">State</label>
//     <select className="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
//       <option selected disabled value="">Choose...</option>
//       <option>Tennessee</option>
//       <option>New York</option>
//       <option>Washington</option>
//       <option>Mississippi</option>
//     </select>
//     <div id="validationServer04Feedback" className="invalid-feedback">
//       Please select a valid state.
//     </div>
//   </div>
//   <div className="col-md-3">
//     <label for="validationServer05" className="form-label">Zip</label>
//     <input type="text" className="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required />
//     <div id="validationServer05Feedback" className="invalid-feedback">
//       Please provide a valid zip.
//     </div>
//   </div>
//   <div className="col-12">
//     <div className="form-check">
//       <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
//       <label className="form-check-label" for="invalidCheck3">
//         Agree to terms and conditions
//       </label>
//       <div id="invalidCheck3Feedback" class="invalid-feedback">
//         You must agree before submitting.
//       </div>
//     </div>
//   </div>
//   <div className="col-12">
//     <button className="btn btn-primary" type="submit">Submit form</button>
//   </div>
// </form>
  );
};

export default ProfileForm;
