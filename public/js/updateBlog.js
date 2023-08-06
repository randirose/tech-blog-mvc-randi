const updateBlogHandler = async (event) => {
    event.preventDefault();
    const button = document.getElementById('createBtn');
    const id = button.dataset.id;

    const title = document.querySelector('#update-title').value.trim();
    const content = document.querySelector('#update-text').value.trim();

    const response = await fetch(`/api/blogpost/edit-post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json',
          },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Sorry, failed to update blog post');
    }
};
const updateButton = document.querySelector('.update-blog');
updateButton.addEventListener('submit', updateBlogHandler);