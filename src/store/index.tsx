import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeConfigSlice from './themeConfigSlice';
import shopSlice from './shop';

const rootReducer = combineReducers({
    themeConfig: themeConfigSlice,
    shop: shopSlice,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
    devTools: process.env.NODE_ENV === 'development',
});
const { dispatch } = store;
export type IRootState = ReturnType<typeof rootReducer>;

export { dispatch };
export default store;
