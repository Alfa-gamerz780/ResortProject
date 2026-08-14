import dotenv from 'dotenv'
import app from './app.js';
import connectDB from './DB/db.js'


dotenv.config({ path: './env' })

// connect the db
connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`server is running on port ${process.env.PORT} here `);
    })
})
.catch((err) =>{
    console.log("DB Connection Error", err);
    throw err
})