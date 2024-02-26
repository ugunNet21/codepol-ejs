const express = require('express');
const app = express();
app.use(()=>{
    console.log('heav req');
});
app.listen(8080, () => console.log("Server is running  on port http://localhost:8080"));