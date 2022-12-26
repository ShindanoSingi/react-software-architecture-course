import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from "styled-components";
import App from "./src/App";
import path from 'path';
import fs from "fs";
import Home from "./src/pages/Home";

const app = express();

app.use(express.static('./build',{ index: false }));

app.get('/*', (req, res) => {

    const sheet = new ServerStyleSheet();

    const staticContext = {}
    const reactApp = (
        <StaticRouter location={req.url} context={staticContext}>
            <App />
        </StaticRouter>
    );

    const templateFile = path.resolve('./build/index.html').toString();
    fs.readFile(templateFile, 'utf8', (err, data) => {
        if(err){
            return res.status(500).send(err);
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
            );
    })
});

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});