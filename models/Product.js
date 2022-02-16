const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            },


        categories: {
            type: Array,
            required: true,
        },


        price: {
            type: Number,
            required: true,
        },
        per: {
            type: String,
            required: true,
        },

        inStock: {
            type: Boolean,
            default: true
        },
        Aanbiedingen: {
            type: Boolean,
            default: false
        },

    },
    {timestamps: true }
)

export default mongoose.models.Product ||
mongoose.model("Product", ProductSchema);
