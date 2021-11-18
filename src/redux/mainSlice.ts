import { RootState } from './index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APIStatus } from '../models';
import { fetchPeople } from './actions';
import { People } from '../models';

interface State {
  characters: {
    data: People[];
    status: APIStatus;
  };
  favorites: {
    favoriteData: People[];
  };
}

const initialState: State = {
  characters: {
    data: [],
    status: APIStatus.Init,
  },
  favorites: {
    favoriteData: [],
  },
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<People>) => {
      state.favorites.favoriteData.push(action.payload);
    },
    removeFromFavorite: (state, action: PayloadAction<string>) => {
      state.favorites.favoriteData = state.favorites.favoriteData.filter(
        (character) => character.name !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.pending, (state) => {
        state.characters.status = APIStatus.Loading;
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.characters.status = APIStatus.Success;
        state.characters.data = action.payload;
      })
      .addCase(fetchPeople.rejected, (state) => {
        state.characters.status = APIStatus.Error;
      });
  },
});

export const { addToFavorite, removeFromFavorite } = mainSlice.actions;

export const getCharacters = (state: RootState) => state.main.characters;
export const getFavorites = (state: RootState) => state.main.favorites;

export default mainSlice.reducer;
