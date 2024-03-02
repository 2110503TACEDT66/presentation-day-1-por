const mongoose=require('mongoose');

const AppointmentSchema=new mongoose.Schema({
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
    camp:{
        type:mongoose.Schema.ObjectId,
        ref:'Camp',
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('Appointment',AppointmentSchema);