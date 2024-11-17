import { getPosts, getComments, createPost } from './js/api.js';
import { renderPosts, renderComments, clearForm, showAlert } from './js/ui.js';

document.addEventListener('DOMContentLoaded', async () => {
    const posts = await getPosts();
    renderPosts(posts, loadComments);

    const postForm = document.getElementById('newPostForm');
    postForm.addEventListener('submit', async event => {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const body = document.getElementById('body').value;

        const newPost = await createPost({ title, body });
        if (newPost) {
            showAlert(`Post created with ID: ${newPost.id}`);
            clearForm(postForm);

            addPostToUI(newPost);
        }
    });
});

async function loadComments(postId, commentsContainer) {
    const comments = await getComments(postId);
    renderComments(comments, commentsContainer);
}

function addPostToUI(post) {
    const container = document.getElementById('newPostForm');
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <button class="comment-button" data-post-id="${post.id}">Load Comments</button>
        <div class="comment"></div>
    `;
    container.prepend(postDiv);

    const loadCommentsButton = postDiv.querySelector('.comment-button');
    loadCommentsButton.addEventListener('click', async event => {
        const postId = event.target.getAttribute('data-post-id');
        const commentsContainer = event.target.nextElementSibling;
        await loadComments(postId, commentsContainer);
    });
}