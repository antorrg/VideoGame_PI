
//       db    88b 88 888888  dP"Yb  88""Yb 88""Yb  dP""b8 
//      dPYb   88Yb88   88   dP   Yb 88__dP 88__dP dP   `" 
//     dP__Yb  88 Y88   88   Yb   dP 88"Yb  88"Yb  Yb  "88 
//    dP""""Yb 88  Y8   88    YbodP  88  Yb 88  Yb  YboodP 

// .oPYo. .oPYo.     .o .o .oPYo.     .o .oPYo. .oPYo. .oPYo. .oPYo. 
// 8  .o8     `8    .o'  8 8  .o8    .o'     `8 8  .o8     `8     `8 
// 8 .P'8    oP'   .o'   8 8 .P'8   .o'     oP' 8 .P'8    oP'   .oP' 
// 8.d' 8 .oP'    .o'    8 8.d' 8  .o'   .oP'   8.d' 8 .oP'      `b. 
// `YooP' 8ooooo o'      8 `YooP' o'     8ooooo `YooP' 8ooooo `YooP' 
// :.....:.........::::::..:.....:..:::::.......:.....:.......:.....:
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

const server = require('./src/server');
const {sequelize} = require('./src/Base');


require('dotenv').config();
const {PORT} = process.env;


server.listen(PORT, async () => {  
    try {
        await sequelize.sync({force:false}),
        console.log(`Server is running on port ${PORT} ✔️`);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});