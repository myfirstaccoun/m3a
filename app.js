const express = require("express");
const app = express();
const port = 1513;
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
const Works = require("./models/theSchema");


/****
live refresh
****/
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
/****
end of live refresh
****/


const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});







/* mongoose */
// const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://<mongoouser>:<mongoopassword>@cluster0.vrucf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

//   .then((result) => {
//     app.listen(port, () => {
//       console.log(`Example app listening at http://localhost:${port}`);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
/* end mongoose */



app.get("/", (req, res) => {
    res.redirect("/html");
});

app.get("/html", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
});