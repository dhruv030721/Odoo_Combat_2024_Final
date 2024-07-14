import { Book } from "../../model/index.js";
import apiResponse from "../../utils/apiResponse.js";

export const removeBook = async (req, res) => {
    const { id } = req.params;

    try {
        const book = await Book.findByIdAndDelete(id);

        if (!book) {
            return apiResponse(res).error('Book not found', 404);
        }

        return apiResponse(res).success('Book successfully removed', true, 200);
    } catch (error) {
        return apiResponse(res).json('Internal Server error', 500);
    }
};