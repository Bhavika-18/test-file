/ Import Statements
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configuration Statements
const port = 3000;
app.use(bodyParser.json());

// Server Listen
app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}`);
});