const delBlogHandler = async (event) => {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogpost/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
          },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Sorry, failed to delete blog post');
    }
};
const delButton = document.querySelector('#deleteBtn');
delButton.addEventListener('click', delBlogHandler);