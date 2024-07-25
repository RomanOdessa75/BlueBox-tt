import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FiltersState {
  searchInput: string
  filter2_1: boolean
  filter2_2: boolean
  filter2_3: boolean
  filter2_4: boolean
  // другие фильтры...
}

const initialState: FiltersState = {
  searchInput: '',
  filter2_1: false,
  filter2_2: false,
  filter2_3: false,
  filter2_4: false
  // другие фильтры...
}

type SetFilterPayload<K extends keyof FiltersState> = {
  type: K
  value: FiltersState[K]
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  //   reducers: {
  //     setFilter: (state, action: PayloadAction<{ type: keyof FiltersState; value: any }>) => {
  //       state[action.payload.type] = action.payload.value
  //     },
  //     removeFilter: (state, action: PayloadAction<keyof FiltersState>) => {
  //       state[action.payload] = false
  //     }
  //   }
  reducers: {
    setFilter<K extends keyof FiltersState>(
      state: { [x: string]: string | boolean },
      action: PayloadAction<SetFilterPayload<K>>
    ) {
      state[action.payload.type] = action.payload.value
    }
    // removeFilter(state, action: PayloadAction<keyof FiltersState>) {
    //   state[action.payload] = initialState[action.payload]
    // }
  }
})

// export const { setFilter, removeFilter } = filtersSlice.actions
export const { setFilter } = filtersSlice.actions

export const selectFilters = (state: { filters: FiltersState }) => state.filters

export default filtersSlice.reducer
