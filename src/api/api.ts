import axios, { AxiosResponse } from 'axios'


export const hotelRoomsAPI = {
    getHotelRooms(
        price_gte?: number,
        price_lte?: number,
        numberOfSeats?: number
    ): Promise<AxiosResponse<HotelRoomType[]>> {
        return axios.get(`http://localhost:3001/rooms`, {
            params: {
                price_gte,
                price_lte,
                numberOfSeats
            }
        })
    }
}



export type HotelRoomType = {
    roomId: number
    title: string
    image: string
    hotelName: string
    price: number
    numberOfSeats: number
}