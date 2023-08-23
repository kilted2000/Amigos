

//using the preexisting code when possible, create a form for the user to fill out their profile information including a maximum of 5 photos of their dog uploaded to cloudinary
//the form should have the following fields:
//first name
//last name
//dog's name
//breed
//personality
//photos of doggie (max 5)
//submit button
//the form should be pre-populated with the user's profile information if it exists
//the form should be able to update the user's profile information
//the form should be able to upload photos to cloudinary
//the form should be able to display the user's photos from cloudinary
//the form should be able to delete photos from cloudinary

import { useState, useEffect } from 'react';

import { CldImage, CldUploadWidget } from 'next-cloudinary';



const ProfileForm = ( {images} ) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dogName, setDogName] = useState('');
  const [breed, setBreed] = useState('');
  const [personality, setPersonality] = useState('');
  
  function handlePhotoUpload(result) {
    console.log(result);
  }
  // useEffect(() => {
  //   fetch('/api/profile')
  //     .then(response => response.json())
  //     .then(data => {
  //       setFirstName(data.firstName);
  //       setLastName(data.lastName);
  //       setDogName(data.dogName);
  //       setBreed(data.breed);
  //       setPersonality(data.personality);
  //       setImages(data.images);
  //     })
  //     .catch(error => console.error(error));
  // }, []);



  const handleSubmit = event => {
    event.preventDefault();
    const updatedProfile = { firstName, lastName, dogName, breed, personality };

    fetch('/api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedProfile)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
      </label>
      <label>
        Dog's Name:
        <input type="text" value={dogName} onChange={e => setDogName(e.target.value)} />
      </label>
      <label>
        Breed:
        <input value={breed} onChange={e => setBreed(e.target.value)} />
      </label>
      <label>
        Doggie Personality:
        <textarea value={personality} onChange={e => setPersonality(e.target.value)} />
      </label>
      <label>
        Photos of Doggie:
        <CldUploadWidget uploadPreset="barkamigos-dog-photos" onUpload={handlePhotoUpload}>
          {({ open }) => {
            function handleOnClick(e) {
              e.preventDefault();
              open();
            }
            return (
              <button className="button" onClick={handleOnClick}>
                Upload an Image
              </button>
            );
          }}
        </CldUploadWidget>
      </label>
      <ul>
        {images?.map(image => {
          return (
            <li key={image.id}>
              <CldImage
                width="200"
                height="200"
                crop="fill"
                src={image.image}
                alt={image.title}
              />
            </li>
  
          );
        })}
      </ul> 
     
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="invalidCheck3"
          aria-describedby="invalidCheck3Feedback"
          required
        />
        <label className="form-check-label" for="invalidCheck3">
          Agree to terms and conditions
        </label>
        <div id="invalidCheck3Feedback" className="invalid-feedback">
          You must agree before submitting.
        </div>
      </div>

      <button type="submit">Save Profile</button>
    </form>
  );
};

export default ProfileForm;


