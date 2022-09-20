import React, { useCallback, useEffect, useRef, useState } from 'react'
import s from './Main.module.scss'
import { HotelRoom } from './HotelRoom/HotelRoom'
import { useAppDispatch, useAppSelector } from '../../utils/hook'
import { Button } from 'antd';
import { FiltrationRooms } from './HotelRoom/FiltrationRooms/FiltrationRooms'
import { requestHotelRooms } from '../../store-reducers/thunks';

export const Main: React.FC = () => {

    const hotelRoomsReducer = useAppSelector(state => state.hotel)
    const { hotelRooms } = hotelRoomsReducer

    const loading = useAppSelector(state => state.app.statusLoading)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(requestHotelRooms())
    }, [])

    const [open, setOpen] = useState(false);

    const showModal = () => setOpen(true)

    const onFilterChanged = useCallback((price_gte: number, price_lte: number, numberOfSeats: number) => {
        if (numberOfSeats === 0) dispatch(requestHotelRooms(price_gte, price_lte, undefined))
        else dispatch(requestHotelRooms(price_gte, price_lte, numberOfSeats))
    }, [])

    const scroll = useRef<HTMLDivElement | null>(null)

    const handleClick = () => scroll.current?.scrollIntoView({ behavior: 'smooth' })

    const [isAutoScroll, setIsAutoScroll] = useState(true)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 200) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }


    return (
        <div className={s.mainBlock} >
            <FiltrationRooms
                open={open}
                setOpen={setOpen}
                loading={loading}
                onFilterChanged={onFilterChanged}
            />
            <div className={s.header} >
                <h1> Бронирование номеров в отеле
                    <i className="fa fa-angle-right" aria-hidden="true" style={{ color: '#a5a5a5', margin: '0 12px' }}></i>

                    <Button onClick={showModal} type="primary" ghost>
                        Фильтр
                    </Button>
                </h1>
            </div>

            {
                <div className={s.hotelItem} onScroll={scrollHandler}>
                    {
                        hotelRooms.length < 1
                            ? <h1>Номеров в отеле не найдено!</h1>
                            : hotelRooms.map(h => <HotelRoom
                                key={h.roomId}
                                hotelRoom={h}
                            />)
                    }
                    <div ref={scroll}></div>
                </div>
            }
            <span className={s.arrow}>
                {
                    !isAutoScroll && !loading && hotelRooms.length > 7 && <i
                        onClick={handleClick}
                        className="fa fa-arrow-circle-down"
                        aria-hidden="true">
                    </i>
                }
            </span>
        </div >
    )
}


