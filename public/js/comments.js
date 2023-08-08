// front-end for when user submits a new comment
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

