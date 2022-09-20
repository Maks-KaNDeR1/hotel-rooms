import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button, Form, Input, InputNumber, Select } from "antd";

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 8
        }
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 16
        }
    }
};


type PropsType = {
    handleCancel: () => void
    onFinish: (values: any) => void
}

export const FormComponent: React.FC<PropsType> = ({ handleCancel, onFinish }) => {
    const [form] = Form.useForm();

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70
                }}
            >
                <Option value="7">+7</Option>
                <Option value="8">8</Option>
            </Select>
        </Form.Item>
    );

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                prefix: "+7"
            }}
            scrollToFirstError
        >

            <Form.Item
                name="surname"
                label="Фамилия"
                rules={[
                    {
                        required: true,
                        message: "Пожалуйста, введите вашу фамилию!",
                        whitespace: true
                    }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="name"
                label="Имя"
                rules={[
                    {
                        required: true,
                        message: "Пожалуйста, введите ваше имя!",
                        whitespace: true
                    }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="patronymic"
                label="Отчество"
                rules={[
                    {
                        required: true,
                        message: "Пожалуйста, введите ваше отчество!",
                        whitespace: true
                    }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="phone"
                label="Телефон"
                rules={[
                    {
                        required: true,
                        message: "Пожалуйста, введите ваш номер телефона!"
                    }
                ]}
            >
                <Input
                    addonBefore={prefixSelector}
                    style={{
                        width: "100%"
                    }}
                    maxLength={10}
                />
            </Form.Item>

            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: "email",
                        message: "Введен неверный адрес электронной почты!"
                    },
                    {
                        required: true,
                        message: "Пожалуйста, введите ваш E-mail!"
                    }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="period "
                label="Период проживания"
                rules={[
                    {
                        required: true,
                        message: "Пожалуйста, введите период проживания!"
                    }
                ]}
            >
                <InputNumber min="1" />
            </Form.Item>

            <Form.Item style={{ marginLeft: '208px' }} >
                <Button onClick={handleCancel} >
                    закрыть
                </Button>

                <Button htmlType="submit" type="primary">
                    Забронировать
                </Button>
            </Form.Item>
        </Form>
    )
}