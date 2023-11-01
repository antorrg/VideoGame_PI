const genres= require('../controllers/genresControllers');
const fillGenTable = require('./autoFillGen');


const getGenresHandler = async (req, res) => {
    try {
        await fillGenTable();
        const response = await genres();
        if (response.length === 0) {
            res.status(404).json({ error: "No genres found" });
        } else {
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports= {
    getGenresHandler
}