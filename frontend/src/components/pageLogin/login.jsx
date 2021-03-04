import React from 'react';
import './login.css'
import 'antd/dist/antd.css';

import { Form, Input, Button } from 'antd'


export default function () {
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
    return(
        <div className="loginContainer">
            <div className="Form">
            <Form {...layout}>
                <Form.Item label="Usuario" name="username">
                <Input />
                </Form.Item>
                <Form.Item label="Senha" name="password">
                <Input />
                </Form.Item>
                <div className="button">
                    <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                    </Form.Item>
                </div>
                <div className="linkCreateAccount">
                    <a href="">Criar conta</a>
                </div>
            </Form>
            </div>
        </div>
    )
}