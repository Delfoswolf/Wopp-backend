const OrderModel = require("../models/Order");
const ProductModel = require("../models/Product");


async function getExistingProducts( productIds ) {

    console.log( productIds );
    return await ProductModel.find({ _id: { $in: productIds }});
}

async function registerOrder( newOrder ) {
    const dbOrder = new OrderModel( newOrder );

    return await dbOrder.save();
}

module.exports = {
    getExistingProducts,
    registerOrder
}