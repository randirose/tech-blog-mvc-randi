// front end for when user clicks delete blog

const delButton = document.getElementById('deleteBtn');
const delBlogHandler = async (event) => {
    event.preventDefault();
    const id = delButton.dataset.id;

    const response = await fetch(`/api/blogpost/edit-post/${id}`, {
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
delButton.addEventListener('click', delBlogHandler);