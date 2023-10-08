

const infoCleaner = (data)=>{
    const arr= data.results;
     array = arr.map(game=>{
    //const platforms = game.parent_platforms.map((platform) => platform.name);
    const platforms = game.parent_platforms.map((platObj) => platObj.platform.name);

    
    return{
        id: game.id,
        name: game.name,
        description: game.description,
        platforms: platforms,
        image: game.background_image,
        released: game.released,
        createdInDb: false
    }
});
  return array;
}


module.exports = {
    infoCleaner
};
