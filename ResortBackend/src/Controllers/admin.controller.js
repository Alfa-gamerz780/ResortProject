import Login from '../Models/admin.model.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const addAdmin = async (req, res) => {

    try {
        const data = req.body;

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const user = await Login.create({
            ...data,
            password: hashedPassword,
        });

        return res.status(201).json({
            status: true,
            message: 'admin created',
        });
    }
    catch (error) {
        return res.status(400).json({
            status: false,
            message: error.message
        })
    }
};

const loginAdmin = async (req, res) => {
    try {
        const { empEmail, password } = req.body;

        const findEmp = await Login.findOne({ empEmail });

        if (!findEmp) {
            return res.status(401).json({
                success: false,
                message: "User Not Found"
            });
        }

        const isPasswordValid = await bcrypt.compare(password, findEmp.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Wrong Password"
            });
        }

        const token = jwt.sign(
            {
                id: findEmp._id,
                empEmail: findEmp.empEmail
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            path: "/",
            maxAge: 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            success: true,
            message: "Login Successfully",
            user: {
                id: findEmp._id,
                empEmail: findEmp.empEmail
            }
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Login Failed"
        });
    }
};

const logoutAdmin = async (req, res) => {
    try {

        res.clearCookie("token", {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            path: "/"
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

const getAdmin = async (req, res) => {

    try {
        const { id } = req.params;

        const staff = await Login.findById(id).select("-password");

        if (!staff) {
            return res.status(404).json({
                success: false,
                message: "Staff not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Got Staff",
            staff,
        });

    } catch (error) {

        res.status(401).json({
            success: false,
            message: "Can't get staff"
        });

    }
};

const checkAuth = async (req, res) => {

    try {

        const token = req.cookies.token;

        if(!token){
            return res.status(401).json({
                success: false,
                message: "Not Authenticated"
            });
        }

        const decode = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        return res.status(200).json({
            success: true,
            user: decode
        });

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: "Invalid Token"
        });

    }
};

export { addAdmin, loginAdmin, logoutAdmin, getAdmin, checkAuth };
