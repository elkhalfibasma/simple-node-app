const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Bonjour, ceci est une application simple sur Azure !');
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});