import express from "express";
import React from "react";
import { StaticRouter } from 'react-router-dom';
import App from "./src/App";
import path from 'path';
import fs from 'fs';


const app = express();

app.use(express.static('./build',{ index: false }));

app.get('/*', (req, res) => {
    const reactApp = renderToString(
        <StaticRouter location={req.url}>
            <App/>
        </StaticRouter>
    );

    const templateFile = path.resolve('./build/index.html')
    fs.readFile(templateFile, 'utf8', (err, data) => {
        if(err){
            return res.status(500).send(err);
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${}</div>`)
        )
    });
});

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});