import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { Candidate, ContainerState } from './types';

// The initial state of the Home container
export const initialState: ContainerState = {
  candidates: [],
  shortlist: [],
  rejected: [],
  searchText: '',
  loading: false,
  error: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
    loadCandidates(state) {
      state.loading = true;
      state.error = null;
      state.candidates = [];
    },
    candidatesLoaded(state, action: PayloadAction<Candidate[]>) {
      const repos = action.payload;
      state.candidates = repos;
      state.loading = false;
    },
    candidatesLoadError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
    shortlist(state, action: PayloadAction<string>) {
      state.shortlist.push(
        ...state.candidates.splice(
          state.candidates.findIndex(item => item.id === action.payload),
          1,
        ),
      );
    },
    reject(state, action: PayloadAction<string>) {
      state.rejected.push(
        ...state.candidates.splice(
          state.candidates.findIndex(item => item.id === action.payload),
          1,
        ),
      );
    },
  },
});

export const { actions: homeActions, reducer, name: sliceKey } = homeSlice;
