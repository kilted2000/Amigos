// // components/ProfileForm.js
// //'use client';
// import { useState, useEffect } from 'react';

// import { CldImage, CldUploadWidget } from 'next-cloudinary';

// //intigrate MongoDB here

// const ProfileForm = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [dogName, setDogName] = useState('');
//   const [breed, setBreed] = useState('');
//   const [personality, setPersonality] = useState('');

//   useEffect(() => {
//     fetch('/api/profile')
//       .then(response => response.json())
//       .then(data => {
//         setFirstName(data.firstName);
//         setLastName(data.lastName);
//         setDogName(data.dogName);
//         setBreed(data.breed);
//         setPersonality(data.personality);
//       })
//       .catch(error => console.error(error));
//   }, []);

// function handlePhotoUpload(result){
// console.log(result);
// }

//   const handleSubmit = event => {
//     event.preventDefault();
//     const updatedProfile = { firstName, lastName, dogName, breed, personality };

//     fetch('/api/profile', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(updatedProfile)
//     })
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.error(error));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         First Name:
//         <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
//       </label>
//       <label>
//         Last Name:
//         <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
//       </label>
//       <label>
//         Dog's Name:
//         <input type="text" value={dogName} onChange={e => setDogName(e.target.value)} />
//       </label>
//       <label>
//         Breed:
//         <input value={breed} onChange={e => setBreed(e.target.value)} />
//       </label>
//       <label>
//         Doggie Personality:
//         <textarea value={personality} onChange={e => setPersonality(e.target.value)} />
//       </label>
//       <label>
//         Photos of Doggie:
//         <CldUploadWidget uploadPreset="barkamigos-dog-photos" onUpload={handlePhotoUpload}>
//           {({ open }) => {
//             function handleOnClick(e) {
//               e.preventDefault();
//               open();
//             }
//             return (
//               <button className="button" onClick={handleOnClick}>
//                 Upload an Image
//               </button>
//             );
//           }}
//         </CldUploadWidget>

//       </label>
// export async function getStaticProps() {

// const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image` ,{
//   headers: {
//     Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
//   }
// } ).then(r => r.json());

// const { resources } = results;

// const images = resources.map(resource => {
//   const { width, height } = resource;
//   return {
//     id: resource.asset_id,
//     title: resource.public_id,
//     image: resource.secure_url,
//     width: resource.width,     // Add width and height
//     height: resource.height,
// })

// return {
//   props: {
//     Images: images
// }}}
// }
//       <div className="form-check">
//         <input
//           className="form-check-input "
//           type="checkbox"
//           value=""
//           id="invalidCheck3"
//           aria-describedby="invalidCheck3Feedback"
//           required
//         />
//         <label className="form-check-label" for="invalidCheck3">
//           Agree to terms and conditions
//         </label>
//         <div id="invalidCheck3Feedback" class="invalid-feedback">
//           You must agree before submitting.
//         </div>
//       </div>

//       <button type="submit">Save Profile</button>
//     </form>
   
//     );
//   };


//     //     <form className="row g-3">
//     //   <div className="col-md-4">
//     //     <label for="validationServer01" className="form-label">First name</label>
//     //     <input type="text" className="form-control is-valid" id="validationServer01" value="Mark" required />
//     //     <div className="valid-feedback">
//     //       Looks good!
//     //     </div>
//     //   </div>
//     //   <div className="col-md-4">
//     //     <label for="validationServer02" class="form-label">Last name</label>
//     //     <input type="text" className="form-control is-valid" id="validationServer02" value="Otto" required />
//     //     <div className="valid-feedback">
//     //       Looks good!
//     //     </div>
//     //   </div>
//     //   <div className="col-md-6">
//     //     <label for="validationServer03" className="form-label">City</label>
//     //     <input type="text" className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
//     //     <div id="validationServer03Feedback" className="invalid-feedback">
//     //       Please provide a valid city.
//     //     </div>
//     //   </div>
//     //   <div className="col-md-3">
//     //     <label for="validationServer04" className="form-label">State</label>
//     //     <select className="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
//     //       <option selected disabled value="">Choose...</option>
//     //       <option>Tennessee</option>
//     //       <option>New York</option>
//     //       <option>Washington</option>
//     //       <option>Mississippi</option>
//     //     </select>
//     //     <div id="validationServer04Feedback" className="invalid-feedback">
//     //       Please select a valid state.
//     //     </div>
//     //   </div>
//     //   <div className="col-md-3">
//     //     <label for="validationServer05" className="form-label">Zip</label>
//     //     <input type="text" className="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required />
//     //     <div id="validationServer05Feedback" className="invalid-feedback">
//     //       Please provide a valid zip.
//     //     </div>
//     //   </div>
//     //   <div className="col-12">
//     //     <div className="form-check">
//     //       <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
//     //       <label className="form-check-label" for="invalidCheck3">
//     //         Agree to terms and conditions
//     //       </label>
//     //       <div id="invalidCheck3Feedback" class="invalid-feedback">
//     //         You must agree before submitting.
//     //       </div>
//     //     </div>
//     //   </div>
//     //   <div className="col-12">
//     //     <button className="btn btn-primary" type="submit">Submit form</button>
//     //   </div>
//     // </form>


// export default ProfileForm;

import { useState, useEffect } from 'react';
import Image from 'next/image' 
import { CldImage, CldUploadWidget } from 'next-cloudinary';

const ProfileForm = ({ images: defaultImages }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dogName, setDogName] = useState('');
  const [breed, setBreed] = useState('');
  const [personality, setPersonality] = useState('');
  const [images, setImages] = useState(defaultImages);
  useEffect(() => {
    fetch('/api/profile')
      .then(response => response.json())
      .then(data => {
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setDogName(data.dogName);
        setBreed(data.breed);
        setPersonality(data.personality);
      })
      .catch(error => console.error(error));
  }, []);

  function handlePhotoUpload(result) {
    console.log(result);
  }

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
      {/* Other input fields */}
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
      {/* ... rest of the form ... */}
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
      {/* <ul className={styles.images}> */}
          {images.map(image => {
            return (
              <li key={image.id}>
                <a href={image.link} rel="noreferrer">
                  <div className={styles.imageImage}>
                    <Image width={image.width} height={image.height} src={image.image} alt="" />
                  </div>
                  <h3 className={styles.imageTitle}>
                    { image.title }
                  </h3>
                </a>
              </li>
            )
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
        <label className="form-check-label" htmlFor="invalidCheck3">
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

export async function getStaticProps() {
  const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`, {
    headers: {
      Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
    }
  }).then(r => r.json());

  const { resources } = results;

  const images = resources.map(resource => ({
    id: resource.asset_id,
    title: resource.public_id,
    image: resource.secure_url,
    width: resource.width,     // Add width and height
    height: resource.height,   // properties if available
  }));

  return {
    props: {
      images,  // Pass the images array as props
    },
  };
}


export default ProfileForm;
