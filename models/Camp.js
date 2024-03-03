const mongoose = require('mongoose');

const CampSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Please add a name'],
        unique : true,
        maxlength: [50,'Name cannot be more than 50 characters']
    },
    address: {
        type:String,
        required: [true,'Please add an address']
    },
    tel: {
        type:String,
        required: [true,'Please add telephone number'],
        maxlength : 10
    }
},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
});