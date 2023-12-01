const { Schema } = require('mongoose');
const { ProductSchema } = require('./Product');

const OrderSchema = new Schema({
    idCustomer: {
        type: String,
        required: true
    },
    productList: {
        type: Array,
        required: true,
        of: ProductSchema
    },
    total: {
        type: Number,
        required: true,
        default: 0
    }
},
{
    timestamps: true
}
);


const OrderModel = model( 'Order', OrderSchema );

module.exports = OrderModel;