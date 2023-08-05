const createButton = document.getElementById('createBtn');
const delButton = document.getElementById('deleteBtn');
const readMoreButton = document.getElementById('readMoreBtn');

const newBlogHandler = async(event)=>{
    event.preventDefault();

    const title = document.querySelector('#blogpost-title').value.trim();
    const blogContent = document.querySelector('#blogpost-text').value.trim();

    if (title && blogContent) {
        const response = await fetch('/api/blogpost', {
            method: 'POST',
            body: JSON.stringify({ title, blogContent }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Sorry, failed to create new blog post');
        }
    }
};

const delBlogHandler = async (event) => {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogpost/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Sorry, failed to delete blog post');
    }
};

const readMoreHandler = async (event) => {
    const id = event.target.getAttribute('data-id');

    document.location.replace(`/blogpost/${id}`);

};

createButton.addEventListener('submit', newBlogHandler);
delButton.addEventListener('click', delBlogHandler);
readMoreButton.addEventListener('click', readMoreHandler);