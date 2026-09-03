import cloudinary from "../Config/cloudinary.js";
import Room from "../Models/room.model.js";
import uploadToCloudinary from "../Utils/UploadToCloudinary.js";

const addRoom = async (req, res) => {
    try {
        const data = req.body;

        if (!req.file) {
            return res.status(401).json({
                success: false,
                message: "Image is required",
            });
        }

        const result = await uploadToCloudinary(req.file.buffer);

        const room = await Room.create({
            roomName: data.roomName,
            noOfBed: data.noOfBed,
            noOfGuest: data.noOfGuest,
            roomArea: data.roomArea,
            roomDescription: data.roomDescription,
            roomPrice: data.roomPrice,
            nameOfBed: data.nameOfBed,
            roomImage: result.secure_url,
            imagePublicId: result.public_id,
        });

        res.status(201).json({
            success: true,
            message: "Room Added Successfully",
            data: room,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something Went Wrong",
            error: error.message,
        })
    }
};

const editRoom = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const room = await Room.findById(id);

        if (!room) {
            return res.status(404).json({
                success: false,
                message: "Room not found",
            });
        }

        room.roomName = data.roomName;
        room.noOfBed = data.noOfBed;
        room.noOfGuest = data.noOfGuest;
        room.roomArea = data.roomArea;
        room.roomDescription = data.roomDescription;
        room.roomPrice = data.roomPrice;
        room.nameOfBed = data.nameOfBed;

        // Image is optional on edit - only touch Cloudinary if a new file was sent.
        if (req.file) {
            const result = await uploadToCloudinary(req.file.buffer);

            if (room.imagePublicId) {
                await cloudinary.uploader.destroy(room.imagePublicId);
            }

            room.roomImage = result.secure_url;
            room.imagePublicId = result.public_id;
        }

        await room.save();

        res.status(200).json({
            success: true,
            message: "Room Updated Successfully",
            data: room,
        });

    } catch (error) {
        console.log("UPDATE ROOM ERROR:", error);
        res.status(500).json({
            success: false,
            message: "Can't Update Room",
            error: error.message,
        });
    }
}


const getRoom = async (req, res) => {
    try {

        const rooms = await Room.find();

        res.status(200).json({
            success: true,
            message: "Fetched Rooms",
            rooms,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Can't Fetch Rooms",
        });
    }
};


const deleteRoom = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedRoom = await Room.findByIdAndDelete(id);

        if (!deletedRoom) {
            return res.status(404).json({
                success: false,
                message: "Data not Found"
            });
        }

        if (deletedRoom.imagePublicId) {
            await cloudinary.uploader.destroy(deletedRoom.imagePublicId);
        }

        res.status(200).json({
            success: true,
            message: "Room Deleted Successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Can't Delete Room",
        });
    }
};

export { addRoom, getRoom, deleteRoom, editRoom };
