module.exports = {
    //returns first 100 characters from blog content to show in summary card
    post_tease: str => {
        const first100 =  str.slice(0, 100) + '...';
        return first100;
    },
    //formats date as mm/dd/yyy
    format_date: (date) => {
        return date.toLocaleDateString();
    }
};