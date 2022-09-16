const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/projetoUna'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/projetoUna/index.html')
} );

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
