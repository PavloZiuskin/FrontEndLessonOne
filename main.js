async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const posts = await response.json();
        const postContainer = document.getElementById('postContainer');

        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <button class="comment-button" onclick="loadComments(${post.id}, this)">Завантажити коментарі</button>
                <div id="comments-${post.id}"></div>
            `;
            postContainer.appendChild(postDiv);
        });
    } catch (error) {
        console.error('Помилка при завантаженні постів:', error);
    }
}

async function loadComments(postId, button) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=2`);
        const comments = await response.json();
        const commentsDiv = document.getElementById(`comments-${postId}`);

        commentsDiv.innerHTML = '';
        comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `
                <p><strong>${comment.name}</strong> (${comment.email})</p>
                <p>${comment.body}</p>
            `;
            commentsDiv.appendChild(commentDiv);
        });
        button.disabled = true;
    } catch (error) {
        console.error('Помилка при завантаженні коментарів:', error);
    }
}

document.getElementById('newPostForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1
            })
        });
        const newPost = await response.json();

        document.getElementById('message').innerText = 'Пост створено успішно';

        const postContainer = document.getElementById('postContainer');
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h3>${newPost.title}</h3>
            <p>${newPost.body}</p>
            <button class="comment-button" onclick="loadComments(${newPost.id}, this)">Завантажити коментарі</button>
            <div id="comments-${newPost.id}"></div>
        `;
        postContainer.insertBefore(postDiv, postContainer.firstChild);
    } catch (error) {
        document.getElementById('message').innerText = 'Помилка при створенні поста';
        console.error('Помилка при створенні поста:', error);
    }
});

getPosts();