import { createNewPost } from '../fetch-utils.js';

const createForm = document.getElementById('create-form');
const postDisplayDiv = document.getElementById('posts-container');
// const createButton = document.getElementById('submit-btn');

createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(createForm);

    const post = await createNewPost(data.get('title', 'description', 'contact'));
    postDisplayDiv.append(post);

    location.replace('../');
    return postDisplayDiv;
});
