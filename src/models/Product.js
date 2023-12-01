 const { Schema, model } = require( 'mongoose' );

const ProductSchema = new Schema({
    // Define las propiedades de la Entidad
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    quantity: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        default: 'non-category'
    },
    urlImage: String,   // El URL de la imagen del producto
    userId: {           // El creador del producto
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "Available"
    }
}, {
    // Define las configuraciones que deseamos para aplicar a este objeto en Mongoose 
    timestamps: true    // Crea 2 campos, (Fecha Creacion, Fecha de Actualizacion)
});

// Crea el modelo a partir del Schema
const ProductModel = model( 
    'Product',          // Nombre de la Entidad (Collection) 
    ProductSchema       // Estructura de la Entidad
);


module.exports = ProductModel, { ProductSchema };

