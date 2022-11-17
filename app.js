import { fetchPosts } from './fetch-utils.js';
import { renderPost } from './render-utils.js';

const postsContainer = document.getElementById('posts-container');

window.addEventListener('load', async (e) => {
    e.preventDefault();
    const posts = await fetchPosts();

    for (let post of posts) {
        const postDiv = renderPost(post);
        postsContainer.append(postDiv);
    }
});
