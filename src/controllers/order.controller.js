const OrderModel = require("../models/Order");
const ProductModel = require("../models/Product");
const { registerOrder, getExistingProducts } = require("../services/order.service");


const createOrder = async ( req, res ) => {
    const inputData = req.body;
    const role = req.authUser.role;

    try {
        if(role != "customer") {
            return res.json({ok: false, msg: "Favor usar perfil de cliente para comprar productos."})
        } 
    
        inputData.idCustomer = req.authUser._id;
    
        if( inputData.productListIds.length === 0 ) {
            return res.json({ ok: false, msg: 'Registe al menos un producto en esta orden' })
        } 
    
        const productList = await ProductModel.find({ _id: { $in: inputData.productListIds}});

        inputData.productList = productList;
        delete inputData.productListIds;

        const dbOrder = new OrderModel( inputData );

        const saveData = await dbOrder.save();

        res.json({ ok: true, data: saveData })

    } catch (error) {
        console.error( error );
        res.json({ ok: false, msg: 'Error al crear la orden' })
    }
       
}

module.exports = {
    createOrder
}