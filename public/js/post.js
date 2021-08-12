const postFormHandler = async (event) => {
    event.preventDefault();

    const urlString = window.location
    const pathname = urlString.pathname
    const pathname_id = pathname.match(/\d+/)
    const user_id = pathname_id[0]
    
    console.log(user_id)

    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();
    console.log(title)
    if (title && body) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, body, user_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log("hello")
            document.location.replace(`/api/posts/userPosts/${user_id}/`);
        } else {
            alert('Failed to add Post')
        }
    }
}

document.querySelector('.addPost').addEventListener('submit', postFormHandler);
