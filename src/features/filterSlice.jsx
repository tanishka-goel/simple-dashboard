import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	chartScope: "all",
	dateRange: {
		from: "",
		to: "",
	},
};

const filterSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		setChartScope(state, action) {
			state.chartScope = action.payload;
		},
		setDateRange(state, action) {
			state.dateRange = {
				...state.dateRange,
				...action.payload,
			};
		},
	},
});

export const { setChartScope, setDateRange } = filterSlice.actions;

export const selectFilters = (state) => state.filters;

export default filterSlice.reducer;
