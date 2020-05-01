const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    res.send("Pagina Principal do painel ADM")
})
router.get("/post", (req,res) => {
    res.send("Pagina de Post")
})
router.get("/categorias", (req,res) => {
    res.send("Pagina de Categoria")
})

module.exports = router;
