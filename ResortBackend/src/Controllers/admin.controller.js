import Login from '../Models/admin.model.js'

const addAdmin = async (req, res) =>{

    try{
        const data = req.body;
        const user = await Login.create(data);

        res.status(201).json({
            status: true,
            message: 'admin created',
        });
    }
    catch(error){
        res.status(400).json({
            status: false,
            message: error.message
        })
    }
};

const loginAdmin = async (req, res) =>{

    try {
        const {empEmail, password} = req.body;
        
        const findEmp = await Login.findOne({ empEmail });

        if(!findEmp){
            return res.status(401).json({
                success: false,
                message: "User Not Found"
            });
        }

        if(findEmp.password !== password){
            return res.status(402).json({
                success: false,
                message: 'Wrong Password'
            });
        }

        res.status(200).json({
            success: true,
            message: "Login Successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Can't Find Data"
        });
    }
};

const logoutAdmin = async (req, res) =>{
    
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: false,
            sameSite : "lax",
        });

        return res.status(200).json({
            success: true,
            message: "Logout Successfully"
        });
    } catch (error) {
        
        return res.status(500).json({
            success: false,
            message: "Logout Failed"
        });
    }
};

export { addAdmin, loginAdmin, logoutAdmin }