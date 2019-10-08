let express = require('express');
let app = express();
let server = require('http').Server(app);

app.use('/slideshow', express.static('Slideshows'))

server.listen(3000, () =>{
    console.log('listening on port 3000')
})