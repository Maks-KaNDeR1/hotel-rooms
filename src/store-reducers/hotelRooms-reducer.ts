import { HotelRoomType } from "../api/api";

let initialState = {
    hotelRooms: [] as HotelRoomType[],
}

export type HotelRoomsReducerType = typeof initialState

export const hotelRoomsReducer = (state: HotelRoomsReducerType = initialState, action: HotelRoomsActionsType): HotelRoomsReducerType => {
    switch (action.type) {
        case 'HR/SET_HOTEL_ROOMS':
            return { ...state, hotelRooms: [...action.hotelRooms] }
        default:
            return state;
    }
};

export const setHotelRooms = (hotelRooms: HotelRoomType[]) =>
    ({ type: 'HR/SET_HOTEL_ROOMS', hotelRooms } as const)

export type HotelRoomsActionsType = ReturnType<typeof setHotelRooms>



