const { Router } = require( 'express' );    // Importa el Router de Express
const router = Router();                    // Invoca el Router de Express

const { createProduct, getProducts, getProductById, removeProductById, updateProductById, getProductsByCategory } = require('../controllers/product.controller');
const { authUser } = require('../middlewares/validate-user.middleware');
const { validate } = require('../models/Product');



/** Definicion de rutas para products 
 * http://localhost:4001/api/products
*/
router.post( '/', authUser, createProduct );              // Crea un producto
router.get( '/', getProducts );                           // Obtener todos los productos
router.get( '/category/:category', getProductsByCategory );            
router.get( '/:id', getProductById );                     // Obtener un producto por ID
router.delete( '/:id', authUser, removeProductById );     // Elimina producto por ID
router.patch( '/:id', authUser, updateProductById );      // Actualiza parcialmente

module.exports = router;                    // Expone el router para que sea usado por otros archivos