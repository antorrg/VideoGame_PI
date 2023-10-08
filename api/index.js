const server = require('./src/server');
const {sequelize} = require('./src/database');

require('dotenv').config();
const {PORT} = process.env;


server.listen(PORT, async () => {
    try {
        await sequelize.sync({force:false}),
        console.log(`Server is running on port ${PORT} ✔️
     ✅ 😉 (You haven't broken nothing yet!!!)`);
    } catch (error) {
        
    }
});