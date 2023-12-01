const { registerOrder } = require("../services/order.service");


const createOrder = async ( req, res ) => {
    const inputData = req.body;
    const role = req.authUser.role;

    if(role != "customer") {
        return res.json({ok: false, msg: "Favor usar perfil de cliente para comprar productos."})
    } 

    inputData.idCustomer = req.authUser._id;

    try {
        const data = await registerOrder( inputData );
        res.status( 201 ).json({
            ok: true,
            data
        });

    } catch ( error ) {
        console.error( error );
        res.status ( 500 ).json({
            ok: false,
            msg: 'Error al crear la orden'
        });

    }
}

module.exports = {
    createOrder
}