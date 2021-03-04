import React from 'react';
import './createAccount.css';
import 'antd/dist/antd.css';

import { Form, Button, Input } from 'antd'


export default function CreateAccountPage() {
    const layout = {
        labelCol: {
            span: 10,
        },
        wrapperCol: {
            span: 17,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 9,
            span: 16,
        },
    };
    
    return(
        <div className="createAccountContainer">
            <Form {...layout}>
                <Form.Item label="Nome" name="username">
                    <Input />
                </Form.Item>
                <Form.Item label="Usuario" name="userId">
                    <Input />
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input />
                </Form.Item>
                <Form.Item label="Senha" name="password">
                    <Input />
                </Form.Item>
                <Form.Item label="Confirmar senha" name="confirmPass">
                    <Input />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Confirmar
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}