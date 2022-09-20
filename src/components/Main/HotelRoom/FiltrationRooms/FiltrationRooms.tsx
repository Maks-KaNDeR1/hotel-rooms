import { Button, Input, Modal, Select, Slider } from "antd";
import React, { useState } from "react";
import s from './FiltrationRooms.module.scss';

type PropsType = {
    open: boolean
    setOpen: (value: boolean) => void
    loading: boolean
    onFilterChanged: (price_gte: number, price_lte: number, numberOfSeats: number) => void
}

export const FiltrationRooms: React.FC<PropsType> = React.memo(({ open, setOpen, loading, onFilterChanged }) => {

    const [numberOfSeats, setNumberOfSeats] = useState<number>(0)
    const [price_gte, setPrice_gte] = useState<number>(0)
    const [price_lte, setPrice_lte] = useState<number>(13000)

    const handleOk = () => {
        onFilterChanged(price_gte, price_lte, numberOfSeats)
        setOpen(false);
    };

    const handleCancel = () => setOpen(false)

    const number = ['Все', '1', '2', '3', '4', '5', '6'];

    const { Option } = Select;
    const handleChange = (value: string) => {
        if (value === 'Все') setNumberOfSeats(0)
        else setNumberOfSeats(+value)
    };

    const onAfterChange = (value: [number, number]) => {
        setPrice_gte(value[0])
        setPrice_lte(value[1])
    };

    return (
        <>
            <Modal
                open={open}
                title="Фильтрация номеров"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                        Submit
                    </Button>,
                ]}
            >
                <div className={s.item}>
                    Кол-во мест:
                    <span>
                        <Select className={s.numberOfSeats}
                            defaultValue={'1'}
                            style={{ width: 120 }}
                            onChange={handleChange}>
                            {number.map(n => (
                                <Option key={n}>{n}</Option>
                            ))}
                        </Select>
                    </span>
                </div>
                <div className={s.item}>
                    Цена:
                    <span className={s.valuePrice}>
                        <Input value={price_gte} />
                        <Input value={price_lte} />
                    </span>
                    <div className={s.item}>
                        <Slider className={s.price}
                            range={{ draggableTrack: true }}
                            style={{ width: 320 }}
                            step={0}
                            max={13000}
                            defaultValue={[0, 13000]}
                            onAfterChange={onAfterChange}
                        />
                    </div>
                </div>
            </Modal>
        </>
    );
});
