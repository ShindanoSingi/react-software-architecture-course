import express from "express";
import React from "react";
import
{ renderToString } from "react-dom/server";

const app = express();

app.get('/*', (req, res) => {
    const reactApp = renderToString(
        <h1>Hello from te server side!</h1>
    );

    return res.send(`
    <html>
        <
    </html>
    `)
})