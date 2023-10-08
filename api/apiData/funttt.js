const gameByName = async (name) => {
    try {
        // Realizar una petición a la API para obtener todos los juegos
        const infoApi = (await axios.get(`${URL}games${API_KEY}`)).data;
        const gameApi = infoCleaner(infoApi);

        // Filtrar los juegos por el nombre proporcionado
        const gameFiltered = gameApi.filter((game) => game.name === name);

        // Realizar una consulta en tu base de datos local para obtener los juegos con el mismo nombre
        const gameDB = await Videogame.findAll({ where: { name: name } });

        // Combinar los resultados de la API y la base de datos local
        return [...gameDB, ...gameFiltered];
    } catch (error) {
        // Manejo de errores en caso de que falle la petición o consulta
        console.error(error);
        throw error;
    }
}