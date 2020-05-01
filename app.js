// Carregando Modulos
const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const app = express();
const admin = require("./rotas/admin");
const path = require("path")
// ----------- Configurações -----------------
// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Handle Bars
app.engine("handlbars", handlebars({ defaultLayout: "main" }));
app.set("view egine", "handlebars");
// Mongoose
// Public
app.use(express.static(path.join(__dirname,"public")))
// --------------- Rotas ------------------
app.use("/admin", admin);
// ---------------- Outros ----------------
const PORT = 8081;
app.listen(PORT, () => {
  console.log("Servidor Rodando");
});
