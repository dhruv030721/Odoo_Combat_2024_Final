import { IssueBook } from "../../model";
import apiResponse from "../../utils/apiResponse";

export const getIssuedBook = async (req, res) => {
    try {

        const { user_id } = req.params;

        const IssuedBook = await IssueBook.find({
            user_id
        })

        if (IssuedBook.length == 0) {
            return apiResponse(res).error("No any issued book", 404);
        }

        return apiResponse(res).success("Issued book data fetched successfully!", true, 200, IssuedBook);

    } catch (error) {
        console.log(error);
        return apiResponse(res).error("Internal Server Error!", 500);
    }
}