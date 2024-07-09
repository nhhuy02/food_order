import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import authReducer from "../Authentication/Reducer";
import restaurantReducer from "../Customer/Restaurant/Reducer";
import menuItemReducer from "../Customer/Menu/Reducer";
import cartReducer from "../Customer/Cart/Reducer";
import { orderReducer } from "../Customer/Order/order.reducer";
import restaurantOrderReducer from "../Admin/Order/restaurant.order.reducer";
// import superAdminReducer from "../SuperAdmin/superAdmin.reducer";
import { ingredientReducer } from "../Admin/Ingredient/Reducer";



const rootReducer=combineReducers({

    auth:authReducer,
    restaurant:restaurantReducer,
    menu:menuItemReducer,
    cart:cartReducer,
    order:orderReducer,

    // // admin
    restaurantsOrder:restaurantOrderReducer,
    ingredients:ingredientReducer,

    // // super admin
    // superAdmin:superAdminReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))