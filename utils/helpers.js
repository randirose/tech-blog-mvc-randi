module.exports = {
    //returns first 30 characters from blog content to show in summary card
    short_str: (str)=>{
    if (str.length > 30)
      return str.substring(0,30)+ '...';
    return str;
    },
    //formats date as mm/dd/yyy
    format_date: (date) => {
        return date.toLocaleDateString();
    }
};