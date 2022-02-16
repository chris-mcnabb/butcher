const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true},
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
            unique: true,
            required: true },

        password: {
            type: String,
            required: true,
            min: 6 },

        isAdmin: {
            type: Boolean,
            default: false },
    },
    {timestamps: true }
)

export default mongoose.models.User ||
mongoose.model("User", UserSchema);
