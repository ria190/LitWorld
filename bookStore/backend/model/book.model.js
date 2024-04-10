import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    asin: String,
    title: String,
    author: String,
    soldBy: String,
    imgUrl: String,
    productURL: String,
    stars: Number,
    reviews: Number,
    price: Number,
    isKindleUnlimited: Boolean,
    category_id: String,
    isBestSeller: Boolean,
    isEditorsPick: Boolean,
    isGoodReadsChoice: Boolean,
    publishedDate: Date,
    category_name: String
});
const Book = mongoose.model("Book", bookSchema);

export default Book;  