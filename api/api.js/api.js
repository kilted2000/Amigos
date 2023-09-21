import { Client, Account, ID, Locale } from 'node-appwrite';


//const { Client, Locale } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
    .setProject('APPWRITE_ID')                // Your project ID
    .setKey('BA_LOCALE_ID');         // Your secret API key           
  

    
const locale = new Locale(client);
//const apiEndpoint = 'http:localhost:3001/api/api'; // Relative URL for your server's route
const promise = locale.listCountries();

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});

// fetch(apiEndpoint, {
//     credentials: 'include', // Include credentials in the request
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     // Handle the data received from the server
//   })
//   .catch(error => {
//     console.error(error);
//     // Handle any errors that occur during the request
//   });
// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });

console.log('Hello World!');