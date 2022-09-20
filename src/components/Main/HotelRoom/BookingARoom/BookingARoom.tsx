import s from './BookingARoom.module.scss';
import React from "react";
import "antd/dist/antd.css";
import { Modal } from "antd";
import { FormComponent } from './Form';

type PropsType = {
  title: string
  open: boolean
  setOpen: (value: boolean) => void
  hotelName: string
  image: string
  price: number
}

export const BookingARoom: React.FC<PropsType> = React.memo(({
  title,
  open,
  setOpen,
  hotelName,
  image,
  price
}) => {


  console.log('FormComponentFormComponentFormComponent');

  const handleCancel = () => {
    setOpen(false);
  };

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        title="Бронирование отеля"
        footer={null}
        onCancel={handleCancel}
      >
        <div className={s.modalWindow} >
          <div className={s.room}>
            <h3> Отель: {hotelName}</h3>
            <img src={image} alt="" />
            <h3>Номер: {title} <div>Цена: {price} ₽/сутки</div></h3>
          </div>

          <div style={{ marginRight: '20px' }}>
            <FormComponent
              handleCancel={handleCancel}
              onFinish={onFinish}
            />
          </div>
        </div>
      </Modal>
    </>
  );
});
