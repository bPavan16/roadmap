import http from "http"
import fs from "fs"
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {

    if (req.url == '/data' && req.method == "GET") {

        const filePath = path.join(__dirname, "data.json");

        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "File not found" }));
                return;
            }

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(data);
        });

    }
    else if (req.url == '/' && req.method == "GET") {
        res.end(JSON.stringify({
            message:"The Server us running correctly"
        }))
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" })
        res.end(JSON.stringify({
            status:404,
            message:"THE ROUTE IS NOT FOUND"
        }))
    }


});

server.listen(3000, () => {
    console.log("Server is running at LOCALHOST 3000")
})