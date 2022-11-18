import { createNewPost } from '../fetch-utils.js';

const createForm = document.getElementById('create-form');
const postDisplayDiv = document.getElementById('posts-container');
const submitBtn = document.getElementById('submit-btn');

createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(createForm);
    const post = {
        title: data.get('title'),
        description: data.get('description'),
        contact: data.get('contact'),
    };
    await createNewPost(post);

    location.replace('../');
});
