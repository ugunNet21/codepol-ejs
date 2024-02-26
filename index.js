const express = require('express');
const app = express();


// app.use((req, res) => {
//     console.log('heav req');
//     res.send({ msg: 'hello world' });
// });
app.get('/cats', (req, res) => {
    res.send('This About cats')
});

app.get('/about', (req, res) => {
    res.send('This About about')
});

app.get('/api', (req, res) => {
    res.res({ api: 'This is an API' })
});
// route parameter
app.get('/blog/:judul', (req, res) =>{
    console.log(req.params)
    res.send('this response')
});
app.get('*', (req, res) => {
    res.send('404 not found')
});

app.listen(8080, () => console.log("Server is running  on port http://localhost:8080"));