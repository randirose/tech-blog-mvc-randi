const readMoreHandler = async (event) => {
    const id = event.target.getAttribute('data-id');

    document.location.replace(`/blogpost/${id}`);

};
document.querySelector('#readMoreBtn')
.addEventListener('click', readMoreHandler);