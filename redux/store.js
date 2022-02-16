import {configureStore, combineReducers} from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import productReducer from "./productRedux";
import mailReducer from "./mailRedux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from "./storage"
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const appReducer = combineReducers({user: userReducer, product: productReducer, mail: mailReducer});

const rootReducer = (state, action) => {

    return appReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
export const persistor = persistStore(store)
