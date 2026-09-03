import dotenv from 'dotenv'
import app from './app.js';
import connectDB from './DB/db.js'


dotenv.config({ path: './.env' })

// connect the db
connectDB()
.then(() => {
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log(`server is running on port ${port}`);
    })
})
.catch((err) =>{
    console.log("DB Connection Error", err);
    throw err
})