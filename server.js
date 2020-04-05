const express = require("express");
const path = require("path");
const app = express();

const configs = {
    caminho: "build", // Where contain the index, in the case, the build
    forcarHTTPS: false, // Redirect to ssl certification, if wanted
    port: process.env.PORT || 3000
}

if (configs.forcarHTTPS) // If the HTTPS is true that will be in action
    app.use((req, res, next) => { // Middleware to all request
        if (req.headers["x-forwarded-proto"] === "http") // Check if is http request
            res.redirect(`https://${req.headers.host}${req.url}`); // Redirect to HTTPS
        else // If is https
            next(); // Dont need to redirect
    });

app.use(express.static(configs.caminho)); // To other archive, like CSSs, Javascripts, Images etc.

app.get("*", (req, res) => {// That indicates to all routes will return the build index
    res.sendFile(path.join(__dirname, configs.caminho, "index.html"));
});

app.listen(configs.port, () => {
    console.log(`Server on port: ${configs.port}!`);
});