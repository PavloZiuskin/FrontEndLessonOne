export function renderPosts(posts, onLoadComments) {
    const container = document.getElementById('postContainer');
    container.innerHTML = '';

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <button class="comment-button" data-post-id="${post.id}">Load Comments</button>
            <div class="comment"></div>
        `;
        container.appendChild(postDiv);
    });

    document.querySelectorAll('.comment-button').forEach(button => {
        button.addEventListener('click', event => {
            const postId = event.target.getAttribute('data-post-id');
            const commentsContainer = event.target.nextElementSibling;
            onLoadComments(postId, commentsContainer);
        });
    });
}

export function renderComments(comments, container) {
    container.innerHTML = comments.map(comment => `
        <div class="comment">
            <strong>${comment.name} (${comment.email})</strong>
            <p>${comment.body}</p>
        </div>
    `).join('');
}

export function clearForm(form) {
    form.reset();
}

export function showAlert(message) {
    alert(message);
}