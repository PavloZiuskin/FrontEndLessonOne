const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Fetch the first 10 posts
export async function getPosts() {
    try {
        const response = await fetch(`${BASE_URL}/posts?_limit=10`);
        if (!response.ok) throw new Error('Failed to fetch posts');
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Fetch the first 2 comments for a specific post
export async function getComments(postId) {
    try {
        const response = await fetch(`${BASE_URL}/posts/${postId}/comments?_limit=2`);
        if (!response.ok) throw new Error('Failed to fetch comments');
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Create a new post
export async function createPost(postData) {
    try {
        const response = await fetch(`${BASE_URL}/posts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        });
        if (!response.ok) throw new Error('Failed to create post');
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}
