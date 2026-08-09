// const review = require('../Models/review.model')
import review from '../Models/review.model.js'

const addReview = async (req, res) => {

    try {
        const data = req.body;
        await review.create(data);

        res.status(201).json({
            status: true,
            message: 'review given',
        })
    }
    catch (error) {
        res.status(400).json({
            status: false,
            message: "Review can't add",
        })
    }
}

export {addReview};