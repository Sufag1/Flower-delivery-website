const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: function() {
            return !this.googleId;
        }
    },
    googleId: {type: String, default: null},
    cartData: {type: Object, default: {}}
}, { minimize: false });



userSchema.statics.signup = async function ( username, email, password) {
    
    if (!username || !email || !password) {
        throw new error ("Fill in all fields");
    }

    if (!validator.isEmail(email)) {
        throw new error ("Invalid Email");
    }

    if (!validator.isStrongPassword(password)) {
        throw new error ("Use a stronger password");
    }


    const registeredUser = await this.findOne({ email })

    if (registeredUser) {
        throw new error ("User already registered");
    }


    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({email, password: hash })

    return user 
}

module.exports = mongoose.model('User', userSchema);
