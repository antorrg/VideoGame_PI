

const infoCleaner = (data)=>{
    const arr= data.results;
     array = arr.map(game=>{
        
    const platforms = game.parent_platforms.map((platObj) => platObj.platform.name);
    const filtGen = game.genres.map(genre => genre.name);
    
    return{
        id: game.id,
        name: game.name,
        description: game.description,
        platforms: platforms,
        image: game.background_image,
        genres: filtGen,
        released: game.released,
        createdInDb: false
    }
});
  return array;
}


const infoClean2 = (data) => {
    // Si data es un objeto, lo conviérte en un array con un solo elemento.
    const dataArray = Array.isArray(data) ? data : [data];
    // Mapea el array de objetos.
    const resultArray = dataArray.map(game => {
        const platforms = game.parent_platforms.map(platObj => platObj.platform.name);
        const filtGen = game.genres.map(genre => genre.name);

        return {
            id: game.id,
            name: game.name,
            description: game.description,
            platforms: platforms,
            image: game.background_image,
            genres: filtGen,
            released: game.released,
            createdInDb: false
        };
    });

    // Si data era un objeto, devuelve el primer elemento del resultado.
    if (!Array.isArray(data)) {
        return resultArray[0];
    }

    return resultArray;
};

const cleanGenre = (data)=>{
    const arr = data.results;
    const array = arr.map((genreInfo) => ({ name: genreInfo.name }));
    return array;
}

module.exports = {
    infoCleaner,
    cleanGenre,
    infoClean2 
};

/*const cleanGenre = (data) => {
    const results = data.results;
    const genreNames = results.map((game) => game.genres.map((genre) => genre.name));
    
    // genreNames es ahora una matriz de matrices, debes aplanarlo para obtener una matriz plana de nombres de géneros únicos.
    const uniqueGenreNames = [...new Set(genreNames.flat())];
    
    return uniqueGenreNames;
};
*/