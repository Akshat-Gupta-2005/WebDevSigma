const express = require('express');
const log = require('console');

const app = express();

function errf(err) {
    if (err) {
        console.error('Error sending file:', err);
        res.status(err.status).end();
    } else {
        console.log('File sent successfully');
    }
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html', (err) => { errf(err) })
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html', (err) => { errf(err) })
})

app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/views/404.html', (err) => { errf(err) })
})