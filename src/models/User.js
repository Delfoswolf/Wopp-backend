const { Schema, model } = require( 'mongoose' );

const UserSchema = new Schema({
    // username: correo electronico
    name: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address : {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true
    },
        // WP: Admin, Editor, Publisher, Collaborator, Register
    // Forma sencilla de roles de usuarios.
    role: {
        type: String,
        required: true,
        default: 'registered'
    }
},
{   
    timestamps: true
}
);


const UserModel = model( 'User', UserSchema );


module.exports = UserModel;
