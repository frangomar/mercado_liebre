const express = require ( "express" );
const path = require ( "path" );

const app = express ();

const publicPath = path.resolve ( __dirname, "./public" );

app.use ( express.static ( publicPath ) );

app.get ( "/", ( req, res ) => {
    res.sendFile ( path.resolve ( __dirname, "./views/home.html" ) );
} );

app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login.html', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.listen ( process.env.PORT || 3031, () => {
    console.log ( "Servidor corriendo ene el puerto 3031" )
} );