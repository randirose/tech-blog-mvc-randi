const commentBtn = document.querySelector('.comment-form');

const submitComment = async (event)=>{
    event.preventDefault();
    const blog_id = document.querySelector('.comment-form').dataset.blogid;
    const commentText = document.querySelector('#comment').value.trim();

    if (commentText) {
        await fetch('api/comments', {
            method: 'POST',
            body: JSON.stringify({
                blog_id,
                commentText
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        document.location.reload();
    }
};

commentBtn.addEventListener('submit', submitComment);