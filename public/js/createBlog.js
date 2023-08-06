const createButton = document.querySelector('.create-blog');

const newBlogHandler = async(event)=>{
    event.preventDefault();

    const title = document.querySelector('#blogpost-title').value.trim();
    const content = document.querySelector('#blogpost-text').value.trim();

    if (title && content) {
        const response = await fetch('/api/blogpost', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
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

createButton.addEventListener('submit', newBlogHandler);

