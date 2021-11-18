import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import mainReducer from './mainSlice';
import { APIStatus } from '../models';

const preloadedState = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites') as string) : [];

export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: {
    main: {
      characters: {
        data: [],
        status: APIStatus.Init,
      },
      favorites: {
        favoriteData: preloadedState,
      },
    },
  },
});

store.subscribe(() => {
  localStorage.setItem('favorites', JSON.stringify(store.getState().main.favorites.favoriteData));
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
