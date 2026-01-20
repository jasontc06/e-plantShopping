import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
dispatch(addItem(product));

 const store = configureStore({
        

    reducer: {
        cart: cartReducer,
    },
});
export default store
