const mongoose = require("mongoose");

const MailSchema = new mongoose.Schema(
    {

        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: false,
        },

        phone: {
            type: String,
            required: true },


        message: {
            type: String,
            required: true,
            },


    },
    {timestamps: true }
)

export default mongoose.models.Mail ||
mongoose.model("Mail", MailSchema);
