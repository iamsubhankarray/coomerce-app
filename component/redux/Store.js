import { combineReducers, configureStore,middleware } from "@reduxjs/toolkit";
import { cartReducer } from "./Reducers";
import storage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
const persistConfig = {
    key: "root",
    storage,
}
const rootReducer = combineReducers({
    reducer: cartReducer
})


// Configuring the store with a key for the AddReducer
const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})


export default store;
export const persistor = persistStore(store)
