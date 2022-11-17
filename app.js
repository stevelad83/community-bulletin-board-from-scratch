import { fetchPosts } from './fetch-utils.js';
import { renderPost } from './render-utils.js';

const postsContainer = document.getElementById('posts-container');
const signUpInBtn = document.getElementById('sign-up-in-button');

window.addEventListener('load', async (e) => {
    e.preventDefault();
    const posts = await fetchPosts();

    for (let post of posts) {
        const postDiv = renderPost(post);
        postsContainer.append(postDiv);
    }
});

signUpInBtn.addEventListener('click', () => {
    location.replace('auth/index.html');
});
