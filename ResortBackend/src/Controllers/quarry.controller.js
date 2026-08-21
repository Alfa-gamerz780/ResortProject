import Quarry from "../Models/quarry.model.js";

const addQuarry = async (req, res) => {
    try {
        const data = req.body;

        const quarry = await Quarry.create({
            name: data.name,
            email: data.email,
            phoneNo: data.phoneNo,
            subject: data.subject,
            message: data.message
        });

        res.status(201).json({
            success: true,
            message: "Quarry Send Successfully",
            data: quarry,
        });
    } catch (error) {
        
        res.status(500).json({
            success: false,
            message: "Can't Send Quarry",
            error: error.message 
        });
    }
};

export { addQuarry };