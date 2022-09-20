import React, { useState } from 'react'
import { HotelRoomType } from '../../../api/api'
import { BookingARoom } from './BookingARoom/BookingARoom'
import s from './HotelRoom.module.scss'

type PropsType = {
    hotelRoom: HotelRoomType
}

export const HotelRoom: React.FC<PropsType> = ({ hotelRoom }) => {
    const { title, image, hotelName, price, numberOfSeats } = hotelRoom

    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    return (
        <div className={s.itemBlock}>
            <BookingARoom
                title={title}
                open={open}
                setOpen={setOpen}
                hotelName={hotelName}
                image={image}
                price={price}
            />
            <div className={s.iconHome}>
                <i className="fa fa-home" aria-hidden="true"></i>
            </div>
            <div onClick={showModal} className={s.item}>
                <div>
                    <span className={s.title}> {title} </span>
                </div>
                <div className={s.number}>
                    <i className="fa fa-solid fa-users"></i>  {
                        numberOfSeats === 1 ? `${numberOfSeats} место` : `до ${numberOfSeats} мест`
                    }
                </div>
                <div className={s.price}> <span>цена</span>{price} <span> ₽/сутки</span></div>
            </div>
        </div>
    )
}


