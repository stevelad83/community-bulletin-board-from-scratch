import { createNewPost } from '../fetch-utils.js';

const createForm = document.getElementById('create-form');

createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(createForm);

    const post = await createNewPost(data.get('title', 'description', 'contact'));
    console.log(post);
});
