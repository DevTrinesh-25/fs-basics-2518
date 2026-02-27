import { createSlice } from '@reduxjs/toolkit'

const vendorsSlice = createSlice({
    name: 'vendors',
    initialState: {
        data: [
            {
                vendorId: "V001",
                name: "FreshFarms Supplies",
                email: "contact@freshfarms.com",
                mobileNo: "+919812345001",
                category: "Fruits & Vegetables",
                address: "12 MG Road, Hyderabad, Telangana",
                isActive: true
            },
            {
                vendorId: "V002",
                name: "Spice World",
                email: "info@spiceworld.in",
                mobileNo: "+919812345002",
                category: "Spices",
                address: "45 Anna Nagar, Chennai, Tamil Nadu",
                isActive: true
            },
            {
                vendorId: "V003",
                name: "TechGear Electronics",
                email: "support@techgear.com",
                mobileNo: "+919812345003",
                category: "Electronics",
                address: "101 Brigade Road, Bengaluru, Karnataka",
                isActive: true
            },
            {
                vendorId: "V004",
                name: "Home Essentials",
                email: "sales@homeessentials.in",
                mobileNo: "+919812345004",
                category: "Home & Kitchen",
                address: "22 Park Street, Kolkata, West Bengal",
                isActive: false
            },
            {
                vendorId: "V005",
                name: "Fashion Hub",
                email: "contact@fashionhub.in",
                mobileNo: "+919812345005",
                category: "Clothing & Accessories",
                address: "5 Linking Road, Mumbai, Maharashtra",
                isActive: true
            }
        ]
    },
    reducers: {
        deleteVendor: (state, action) => {
            state.data = state.data.filter((vendor) => vendor.vendorId !== action.payload);
            return state;
        }
    }
});

export const { deleteVendor }  = vendorsSlice.actions;

export default vendorsSlice.reducer;

