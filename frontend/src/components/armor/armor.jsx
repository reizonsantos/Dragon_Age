import React, { useState } from 'react'
import './armor.css'
import 'antd/dist/antd.css';

import { Form, InputNumber, Input, Modal, Button } from 'antd'

import Inventory from '../inventory/inventory'

export default function () {
    const[visible, setVisible] = useState(false);

    return (
        <div className="armorContainer">
            <div className="armor">
                <Form>
                    <Form.Item label="Velocidade inicial" name="characterInitialSpeed">
                        <InputNumber min="1"/>
                    </Form.Item>
                    <Form.Item label="Defesa inicial" name="characterInitialDefense">
                        <InputNumber min="1" />
                    </Form.Item>
                    <Form.Item label="Armadura inicial" name="characterInitialArmor">
                        <InputNumber min="1" />
                    </Form.Item>
                    <Form.Item label="Tipo de Armadura inicial" name="characterInitialTypeArmor">
                        <Input />
                    </Form.Item>
                </Form>
            </div>
            <div className="modalInventory">
                <Button type="primary" onClick={() => setVisible(true)}>
                    Adicionar arma
                </Button>
                <Modal 
                    title="Adicione suas armas"
                    centered
                    visible={visible}
                    onOk={() => setVisible(false)}
                    onCancel={() => setVisible(false)}           
                >
                    <Inventory />
                </Modal>
            </div>
        </div>
    )
}





