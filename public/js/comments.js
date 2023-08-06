const submitComment = async (event)=>{
    event.preventDefault();
    const blog_id = document.querySelector('.comment-form').dataset.blogid;
    const comment_text = document.querySelector('#comment').value.trim();

    if (comment_text) {
        await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                blog_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        document.location.reload();
    }
};

document.querySelector('.comment-form').addEventListener('submit', submitComment);

const delButton = document.getElementById('deleteComment');
const delCommentHandler = async (event) => {
    event.preventDefault();
    const id = delButton.dataset.id;

    const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
          },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Sorry, failed to delete comment');
    }
};
delButton.addEventListener('click', delCommentHandler);