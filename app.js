const express = require("express")
const app = express();
const path = require("path")

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.use(express.urlencoded());

app.listen(process.env.PORT || 3000, function () {
    console.log("Servidor corriendo en el puerto 3000");
})


app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
})

app.get("/products", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/products.html"));
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
})

app.get("/detail", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/detail.html"));
})

app.get("/profile", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/profile.html"));
})

