//---monolithic architecture----//




// const express = require("express");
// const colors = require("colors");
// const dotenv = require("dotenv").config();
// const app = express();

// const PORT = 5000;

// app.get("/", (req, res) => {
//   res.send({
//     message: "Hello World",
//   });
// });

// app.listen(PORT, () =>
//   console.log(`Server running on port ${PORT}`.yellow.bold)
// );

const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");

const PORT = 5000;

const app = express();
//-----properties of express has been transfered into app------//
app.use(express.json());
//---Here express.json is middleware which is predefined(jo pehle se hi diya hua h)---//


app.get("/", (req, res) => {
    res.send("API is running");
    });
    app.listen(PORT, () =>{
        console.log(`Server running on port ${PORT}`.yellow.bold)
      });
      