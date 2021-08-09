const postFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();
    console.log(title)
    if (title && body) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log("hello")
            // document.location.replace('/api/posts');
        } else {
            alert('Failed to add Post')
        }
    }
}

document.querySelector('.addPost').addEventListener('click', postFormHandler);
