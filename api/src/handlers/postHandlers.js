


const createGameHandler = async(req, res) => {
        const {name,  description,image, released, genres, platforms, rating, } = req.body;
        if(!name){ return res.status(404).send("A name is required to create a videogame");
         } 
         try {
          const response = await createGameDB(name, description, image, released, genres, platforms,rating);
          res.status(201).json(response);
        } catch (error) {
          res.status(500).json({error:error.message});
        
        }
      }
     



module.exports = {
    createGameHandler,
    
};