const express = require('express');

const app = express();

const PORT = process.env.PORT || 1998;

app.use(express.static('img'));

app.get('/', (req, res) => {
    res.send(`<h3>Bonjour, voici le profile git de Gloire</h3>
    <img src="Capture.PNG" alt="prof" />
    `);
});

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));