import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface floorStatesProps {
    floor: number,
    isOpen: boolean,
}

const initialState: floorStatesProps = {
    floor: 0,
    isOpen: false,
};

export const floorSlice = createSlice({
    name: "floor",
    initialState,
    reducers: {
        setFloor: (state, action: PayloadAction<number>) => {
            state.floor = action.payload;
        },
        plusFloor: (state) => {
            if(state.floor < 4) state.floor++;
        },
        minusFloor: (state) => {
            if(state.floor > 0) state.floor--;
        },
        setIsOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        },
    },
});

export const { setFloor, setIsOpen, plusFloor, minusFloor } = floorSlice.actions;
export default floorSlice.reducer;