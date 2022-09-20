import { hotelRoomsAPI, HotelRoomType } from "../api/api";
import { AppThunkType } from "./store";
import { AxiosResponse } from 'axios';
import { setStatus, errorMessage } from "./app-reducer";
import { setHotelRooms } from "./hotelRooms-reducer";

export const requestHotelRooms = (
    price_gte?: number,
    price_lte?: number,
    numberOfSeats?: number,
): AppThunkType => async (dispatch) => {

    dispatch(setStatus(true))
    try {
        const res: AxiosResponse<HotelRoomType[]> = await hotelRoomsAPI.getHotelRooms(price_gte, price_lte, numberOfSeats)
        dispatch(setHotelRooms(res.data))
    }
    catch (err: any) {
        dispatch(errorMessage(err))
    }
    finally {
        dispatch(setStatus(false))
    }
}

