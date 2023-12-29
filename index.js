const express = require('express');
const fs = require('fs/promises');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
      console.log("start working");
        // Read data from the data.json file
        const data = await fs.readFile('data.json', 'utf8');
        const jsonData = JSON.parse(data);

        // Send the data as JSON response
        res.json(jsonData);
    } catch (error) {
        console.error('Error reading data:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
