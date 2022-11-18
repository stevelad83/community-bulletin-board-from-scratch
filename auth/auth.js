/* Imports */

import { fetchPosts, signUpUser, signInUser, checkAuth } from '../fetch-utils.js';

/* Get DOM Elements */
const signUpForm = document.getElementById('sign-up');
const signInForm = document.getElementById('sign-in');
/* State */

/* Events */
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const email = data.get('email');
    const user = await signUpUser(email, data.get('password'));

    if (user) {
        location.replace('/');
    }
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    const email = data.get('email');

    const user = await signInUser(email, data.get('password'));
    if (user) {
        location.replace('/');
    } else {
        checkAuth();
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
