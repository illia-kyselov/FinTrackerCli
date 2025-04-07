import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import expenseReducer from './slices/expenseSlice';
import categoriesReducer from './slices/categoriesSlice';
import userReducer from './slices/userSlice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedExpenseReducer = persistReducer(persistConfig, expenseReducer);

export const store = configureStore({
    reducer: {
        expenses: persistedExpenseReducer,
        categories: categoriesReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
