import React from 'react'
import './status.css'
import 'antd/dist/antd.css';
import { Form, Select, InputNumber } from 'antd'

const { Option } = Select;


export default function () {
    return (
        <div className="statusContainer">
            <Form>
                <Form.Item label="Classe " name="characterClass">
                    <Select>
                        <Option value="Masculino"></Option>
                        <Option value="Feminino"></Option>
                        <Option value="Outro"></Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Level inicial" name="characterLevel">
                    <InputNumber min="1" max="100"/>
                </Form.Item>
                <Form.Item label="Experiência inicial" name="characterInitialExp">
                <InputNumber min="1" />
                </Form.Item>
                <Form.Item label="Vida Inicial" name="characterInitialHP">
                    <InputNumber min="1" />
                </Form.Item>
                <Form.Item label="Mana Inicial" name="characterInitialMP">
                    <InputNumber min="1" />
                </Form.Item>
            </Form>
        </div>   
    )
}