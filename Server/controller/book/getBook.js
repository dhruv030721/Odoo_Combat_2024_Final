import { Book } from "../../model/index.js";
import apiResponse from "../../utils/apiResponse.js"

export const getBooks = async (req, res) => {
    try {

        const Books = await Book.find();

        return apiResponse(res).success("Book data fetched successfully!", true, 200, Books);



    } catch (error) {
        console.log(error.stack);
        return apiResponse(res).error("Internal Server Error", 500);
    }
}