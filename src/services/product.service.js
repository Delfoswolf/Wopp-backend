const ProductModel = require( '../models/Product' );

async function registerProduct( product ) {
    return await ProductModel.create( product );
}

async function getAllProducts() {
    return await ProductModel.find();
}

async function getOneProductById( id ) {
    return await ProductModel.findById( id );
    //return await ProductModel.find({ _id: id });
}

async function removeOneProductById( id ) {
    return await ProductModel.findOneAndRemove({ _id: id });
}

async function updateOneProductById( id, updatedProduct ) {
    return await ProductModel.findOneAndUpdate(
        { _id: id },        // Objeto para realizar la consulta y encontrar el documento a actualizar
        updatedProduct,     // Datos que vamos a actualizar
        { new: true }       // Configura la respuesta de la consulta (Mostrar el cambio actual) 
    );
}

async function getAllProductsByCategory( category ) {
    return await ProductModel.find({ category });
}

module.exports = {
    registerProduct, 
    getAllProducts, 
    getOneProductById,
    removeOneProductById, 
    updateOneProductById,
    getAllProductsByCategory
}