import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import StaticRouter from 'react-router-dom'
import App from "./src/App";
import path from 'path'


const app = express();

app.use(express.static('./build',{ index: false }));

app.get('/*', (req, res) => {
    const reactApp = renderToString(
        <StaticRouter>
            <App />
        </StaticRouter>
    );

    const templateFile = pa
});

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});