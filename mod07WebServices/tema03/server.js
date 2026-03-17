const express = require('express');
const app = express();
const xml2js =require('xml2js');
const parser = new xml2js.Parser()

app.get("/api/noticias", async (req, res) => {

    try {
        const response = await fetch("https://g1.globo.com/rss/g1/")
        const xml = await response.text()

        const result = await parser.parseStringPromise(xml)

        const noticias = result.rss.channel[0].item.map(n => ({
            titulo: n.title[0],
            link: n.link[0]
        }))

        res.json(noticias)

    } catch (error) {
        res.status(500).json({ erro: "Erro ao buscar/processar notícias" })
    }

})

app.listen(3000, ()=> {
    console.log('http://localhost:3000');
})