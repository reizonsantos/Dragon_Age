import React from 'react'
import './information.css'
import 'antd/dist/antd.css';

import { Form, Input, InputNumber, Select } from 'antd'

const { Option } = Select;


export default function () {
    return (
        <div className="informationContainer">
            <div className="characterDate">
                <Form>
                    <Form.Item label="Nome:" name="characterName">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Raça" name="characterRace">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Idade">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="Gênero " name="gender">
                        <Select>
                            <Option value="Masculino"></Option>
                            <Option value="Feminino"></Option>
                            <Option value="Outro"></Option>
                        </Select>
                    </Form.Item>
                </Form>
            </div>
            <div className="characterImage">
                Logo
            </div>
        </div>
        
    );
}