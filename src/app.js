require( 'dotenv' ).config();                               // Importa dependencia para crear variables de entorno

const express = require( 'express' );                       // Importa Express crea infraestructura, rutas, responde a peticiones
const { dbConection } = require('./config/mongo.config');   // Importa configuracion de DB para Mongo usando Mongoose
const app = express();                                      // Asigna invocacion de Express
const cors = require( 'cors' );                             // CORS: Permisiona el acceso a peticiones de aplicaciones externas


const PORT = process.env.PORT || 3000;                      // Define el puerto a traves de la variable de entorno


app.use( cors() );
app.use( express.json() );

/** Establece Rutas de la aplicacion */
app.use( '/api/auth', require( './routes/auth.routes' ) );
app.use(
    '/api/products',                        // Middleware que configura la ruta
    require( './routes/products.routes' )   // Importa el archivo de rutas para esta ruta '/api/products'
);    
app.use( '/api/categories', require( './routes/category.routes' ) );
app.use( '/api/order', require( './routes/order.routes' ) );

dbConection();      // Invoca la configuracion de DB, es decir: Pone a funcionar la BD

/** Lanza un Servidor web usando Express en el puerto que se le indique a la variable de entorno PORT */
app.listen( PORT, function() {
    console.log( `Servidor escuchando en http://localhost:${ PORT }` );
} );

