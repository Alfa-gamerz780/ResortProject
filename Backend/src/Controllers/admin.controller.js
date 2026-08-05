const login = require('../Models/admin.model')

const addAdmin = async (req, res) =>{

    try{
        const data = req.body;
        await login.create(data);

        res.status(201).json({
            status: true,
            message: 'admin created',
        });
    }
    catch(error){
        // const data = req.body
        res.status(400).json({
            status: false,
            message: error.message
            // data: data
        })
        
        console.log(data)
    }
}

module.exports = { addAdmin }