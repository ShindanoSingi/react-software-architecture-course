import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import StaticRouter from 'react-router-dom';3
import App from "./src/App";
import path from 'path';
import fs from "fs";
import Home from "./src/pages/Home";

const app = express();

app.use(express.static('./build',{ index: false }));

app.get('/*', (req, res) => {
    const reactApp = renderToString(
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>
    );

    const templateFile = path.resolve('./build/index.html');
});

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});