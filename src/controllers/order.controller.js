

const createOrder = async ( req, res ) => {
    const inputData = req.body;
    const payload = req.authUser;

    res.json(inputData.payload); // TODO: Falta filtrar registro de compra de producto a traves de rol de usuario
}

module.exports = {
    createOrder
}