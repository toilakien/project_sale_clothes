import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeConfigSlice from './themeConfigSlice';
import shopSlice from './shop';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    themeConfig: themeConfigSlice,
    shop: shopSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
    devTools: process.env.NODE_ENV === 'development',
});
// @ts-ignore:next-line
store.__persistor = persistStore(store);
const { dispatch } = store;
export type IRootState = ReturnType<typeof rootReducer>;

export { dispatch };
export default store;
