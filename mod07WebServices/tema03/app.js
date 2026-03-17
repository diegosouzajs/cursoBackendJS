const xml2js = require("xml2js")

async function buscarNoticias(){

    const response = await fetch("https://g1.globo.com/rss/g1/")
    const xml = await response.text()

    xml2js.parseString(xml, (err, result) => {

        const noticias = result.rss.channel[0].item

        noticias.slice(0,5).forEach(noticia => {

            console.log({
                titulo: noticia.title[0],
                link: noticia.link[0],
                data: noticia.pubDate[0]
            })

        })

    })

}

buscarNoticias()