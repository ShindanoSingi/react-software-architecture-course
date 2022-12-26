import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import StaticRouter from 'react-router-dom';
import App from "./src/App";
import path from 'path';
import fs from "fs";
import Home from "./src/pages/Home";

const app = express();

app.use(express.static('./build',{ index: false }));

app.get('/*', (req, res) => {
    // const reactApp = renderToString(
    //         <App />
    // );

    var a = ReactDOMServer.renderToString(React.createElement('h2',null,'Element rendered from Server'));


    console.log(reactApp);

    const templateFile = path.resolve('./build/index.html');
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