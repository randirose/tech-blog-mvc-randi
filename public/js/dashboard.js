const createButton = document.querySelector('.create-blog');
const delButton = document.querySelector('#deleteBtn');


const newBlogHandler = async(event)=>{
    event.preventDefault();

    const title = document.querySelector('#blogpost-title').value.trim();
    const content = document.querySelector('#blogpost-text').value.trim();

    if (title && content) {
        const response = await fetch('/api/blogpost', {
            method: 'POST',
            body: JSON.stringify({ title, blogContent: content }),
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


createButton.addEventListener('submit', newBlogHandler);
delButton.addEventListener('click', delBlogHandler);
