import express from "express";
import React from "react";
import { StaticRouter } from 'react-router-dom'
import App from "./src/App";


const app = express();

app.use(express.static('./build',{ index: false }));

app.get('/*', (req, res) => {
    const reactApp = renderToString(
        <StaticRouter location={req.url}>
            <App/>
        </StaticRouter>
    );

    return res.send(`
    <html>
        <body>
            <div id="root">${reactApp}</div>
        </body>
    </html>
    `);
});

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});