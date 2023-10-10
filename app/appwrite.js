"use client"
import { Client, Account, Locale } from 'appwrite';
 const client = new Client();

const locale = new Locale(client);
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('APPWRITE_ID'); // Replace with your project ID


    const promise = locale.listCountries();

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});

