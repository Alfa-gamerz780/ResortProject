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

const getQuarry = async (req, res)=>{

    try {
        const quarry = await Quarry.find();

        res.status(200).json({
            success: true,
            message: "Found Quarries",
            quarry,
        });

    } catch (error) {
        
        res.status(401).json({
            success: false,
            message: "Can't Found Quarries"
        });
    }
    
};

const deleteQuarry = async (req, res) =>{

    console.log(req.params);
    try {
        const { id } = req.params;
        
        const deletedQuarry = await Quarry.findByIdAndDelete(id);

        if(!deletedQuarry){
            return res.status(404).json({
                success: false,
                message: "Can't Find Quarry"
            });
        }

        res.status(200).json({
            success: true,
            message: "Deleted Quarry"
        })
    } catch (error) {
        
        res.status(500).json({
            success: false,
            message: "Can't Delete Quarry"
        });
    }
};

export { addQuarry, getQuarry, deleteQuarry };