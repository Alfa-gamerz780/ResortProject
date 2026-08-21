import Review from "../Models/review.model.js";

const addReview = async (req, res) => {
    try {
        const data = req.body;

        const review = await Review.create({
            name: data.username,
            email: data.email,
            message: data.message
        });

        res.status(201).json({
            success: true,
            message: "Review added successfully",
            data: review,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Review not added",
            error: error.message,
        });

    }
};


const getReview = async (req, res) => {
    try {

        const reviews = await Review.find();

        res.status(200).json({
            success: true,
            message: "Review fetched successfully",
            reviews,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "can't fetch review",
        });

    }
};


const dropReview = async (req, res) => {
    try {

        const { id } = req.params;

        const dropReview = await Review.findByIdAndDelete(id);

        if (!dropReview) {
            return res.status(404).json({
                status: false,
                message: "Review not found"
            });
        }

        res.status(200).json({
            status: true,
            message: "Review Deleted"
        });

    } catch (error) {

        res.status(500).json({
            status: false,
            message: "Something went wrong"
        });

    }
};


export { addReview, getReview, dropReview };