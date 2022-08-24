const mongoose = require('mongoose');

const Equipment = mongoose.model('Equipment', {
    category: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    model: {
        type: String,
        required: true,
        trim: true
    },
    serialNumber: {
        type: String,
        required: true,
        trim: true
    },
    inventoryNumber: {
        type: String,
        required: false,
        trim: true
    },
    location: {
        type: String,
        required: false,
        trim: true
    },
    dateOfPurchase: {
        type: Date,
        required: false,
    },
    warrantyDate: {
        type: Date,
        required: false
    },
    remarks: {
        type: String,
        required: false
    },
    equipmentStatus: {
        type: Boolean,
        required: false
    }
});

module.exports = Equipment;