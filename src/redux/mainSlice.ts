import { RootState } from './index';
import { createSlice } from '@reduxjs/toolkit';
import { APIStatus } from '../models';
import { fetchPeople } from './actions';
import { People } from '../models';

interface State {
  characters: {
    data: People[];
    status: APIStatus;
  };
  favorites: {
    data: People[];
    status: APIStatus;
  };
}

const initialState: State = {
  characters: {
    data: [],
    status: APIStatus.Init,
  },
  favorites: {
    data: [],
    status: APIStatus.Init,
  },
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
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

export const getCharacters = (state: RootState) => state.main.characters;

export default mainSlice.reducer;
