import {configureStore} from '@reduxjs/toolkit';
import CartSlice from './slices/CartSlices';
import CategorySlice from './slices/CategorySlice';
import SearchSlice from './slices/SearchSlice';


const store= configureStore({
    reducer: {
        cart: CartSlice,
        category : CategorySlice,
        search : SearchSlice,
    },
});
export default store;