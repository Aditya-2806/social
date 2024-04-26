const express=require('express');
const app=express();

require('dotenv').config();
const port=process.env.port||3000;

app.use(express.json());
const Routes=require( './routes/createRoute' );
const { Console } = require('console');
app.use('/api/v1',Routes);

app.listen(port,()=>{
    console.log(`server started at ${port}`);
})

const dbconnect=require( './config/database' ) ;
dbconnect();
app.get( '/', ( req , res ) => {
    res.send( 'Hello World!' );
});
