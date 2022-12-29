if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/weather', (req, res) => {
    //post scripts here
    console.log(req.body)
})

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));