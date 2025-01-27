
import {createServer} from "node:http"
import {create, liste} from "./blockchain.js";
import {NotFoundError} from "./errors.js";
import {calculateHash, createBlock, findBlocks, findLastBlock} from "./blockchainStorage.js";
import {getDate} from "./divers.js";

createServer(async (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        const url = new URL(req.url, `http://${req.headers.host}`)
        const endpoint = `${req.method}:${url.pathname}`

        let results
        let test

        try {
            switch (endpoint) {
                case 'GET:/blockchain':
                    console.log("Je suis GET")
                    //results = await liste(req, res, url)
                    //results = await findBlocks()
                    //console.log(JSON.parse(results))
                    test = await findLastBlock()
                    console.log(test)
                    results = calculateHash(test)
                    console.log(results)

                    break
                case 'POST:/blockchain':
                    const params = url.searchParams;
                    const nom = params.get('nom');
                    const don = params.get('don');


                    // Appel de la fonction createBlock avec les données extraites de l'URL
                    results = await createBlock({ nom, don: parseFloat(don) });
                    break;
                default :
                    res.writeHead(404)
            }
            if (results) {
                res.write(JSON.stringify(results))
            }
        } catch (erreur) {
            if (erreur instanceof NotFoundError) {
                res.writeHead(404)
            } else {
                throw erreur
            }
        }
        res.end()
    }
).listen(3000)
