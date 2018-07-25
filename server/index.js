require ('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const app = express();
const cors=require('cors');

const matrix = require('./server');

app.use(bodyParser.json());
app.use(cors());

massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance)
} ).catch(err => console.log(err));

//app.use( express.static( `${__dirname}/build` ) );

// app.post( '/api/addListing', matrix.postRequest );
app.get( '/api/fetchListings', matrix.getRequest );
// app.put( '/api/updateListing/:id', matrix.putRequest );
app.delete( '/api/deleteListing/:id', matrix.deleteRequest );

const port = 3001
app.listen( port, () => { console.log(`Coming to you live from port ${port} , the hottest port in town!`);});