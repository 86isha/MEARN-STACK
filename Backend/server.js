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
const userdata = require("./utility/userdata.json");
const fileURLtoPath = require("url");
const path = require("path");

const app = express();

const PORT = 5000;


//-----properties of express has been transfered into app------//
app.use(express.json());
//---Here express.json is middleware which is predefined(jo pehle se hi diya hua h)---//

//static files wala middleware
app.use(express.static(path.resolve(__dirname, "./Public")));


app.get("/userdata", (req, res) => {
    res.send(userdata);
    });

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./Public", "index.html"));
    });

    app.get("/contact", (req, res) => {
      res.sendFile(path.resolve(__dirname,"./Public", "contact.html"));
      });


app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`.yellow)
    });
      