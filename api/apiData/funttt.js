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



                                                                                                                                                                                                    
                                                                                                                                                                                                         
//    db    88b 88 888888  dP"Yb  88""Yb 88""Yb  dP""b8 
//   dPYb   88Yb88   88   dP   Yb 88__dP 88__dP dP   `" 
//  dP__Yb  88 Y88   88   Yb   dP 88"Yb  88"Yb  Yb  "88 
// dP""""Yb 88  Y8   88    YbodP  88  Yb 88  Yb  YboodP 

                                                                  
// .oPYo. .oPYo.     .o .o .oPYo.     .o .oPYo. .oPYo. .oPYo. .oPYo. 
// 8  .o8     `8    .o'  8 8  .o8    .o'     `8 8  .o8     `8     `8 
// 8 .P'8    oP'   .o'   8 8 .P'8   .o'     oP' 8 .P'8    oP'   .oP' 
// 8.d' 8 .oP'    .o'    8 8.d' 8  .o'   .oP'   8.d' 8 .oP'      `b. 
// 8o'  8 8'     .o'     8 8o'  8 .o'    8'     8o'  8 8'         :8 
// `YooP' 8ooooo o'      8 `YooP' o'     8ooooo `YooP' 8ooooo `YooP' 
// :.....:.........::::::..:.....:..:::::.......:.....:.......:.....:
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::