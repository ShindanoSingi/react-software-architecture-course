import express from "express";
import React from "react";
import
{ renderToString } from "react-dom/server";

const app = express();

app.get('/*', (req, res) => {
    const reactApp = renderToString(
        <h1></h1>
    )
})