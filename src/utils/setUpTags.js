const setUpTags = recipes => {
    let allTags={};
    recipes.forEach((recipe) => {     //object of 9 arrays
        recipe.content.tags.forEach((tag) => {  //array level
            if(allTags[tag]) {
                allTags[tag]=allTags[tag]+1
            } else {
                allTags[tag]=1
            }
        })
    })
    console.log(allTags);
    const sortTags=Object.entries(allTags).sort((a, b) => {
        const [firstTag]=a;
        const [secondTag]=b;
        return firstTag.localeCompare(secondTag);
    })
    console.log(sortTags);
    return sortTags
}

export default setUpTags
