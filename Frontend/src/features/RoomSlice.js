import { createSlice } from "@reduxjs/toolkit";
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'


const initialState ={
    rooms: [
        {
            id: 1,
            title: 'Deluxe Room',
            price: 4000,
            image: pic1,
            bed: '1 King Bed',
            area: 21,
            guest: 2,
            dec: 'Wake up to the stunning ocean and enjoy unmatched comfort',
        },
        {
            id: 2,
            title: 'Deluxe Room',
            price: 3000,
            image: pic2,
            bed: '1 King Bed',
            area: 21,
            guest: 2,
            dec: 'Wake up to the stunning ocean and enjoy unmatched comfort',
        },
        {
            id: 3,
            title: 'Deluxe Room',
            price: 14000,
            image: pic3,
            bed: '3 King Bed',
            area: 73,
            guest: 8,
            dec: 'Wake up to the stunning ocean and enjoy unmatched comfort',
        },
        {
            id: 4,
            title: 'Deluxe Room',
            price: 8000,
            image: pic4,
            bed: '2 King Bed',
            area: 43,
            guest: 4,
            dec: 'Wake up to the stunning ocean and enjoy unmatched comfort',
        },
    ],
};


const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {},
});

export default roomSlice.reducer;