import React, { useState } from 'react'
import './inventory.css'
import 'antd/dist/antd.css';

import { Table, Modal, Button, Form, Input, InputNumber } from 'antd';

const columns = [
  {
    title: 'Arma',
    dataIndex: 'weaponName',
    key: 'weaponName',
  },
  {
    title: 'Ataque',
    dataIndex: 'attack',
    key: 'attack',
  },
  {
    title: 'Dano',
    dataIndex: 'damage',
    key: 'damage',
  },
  {
    key: 'edit',
    render: text => <a>Editar</a>
  },
  {
    key: 'delete',
    render: text => <a>Deletar</a>
  },
];

const data = [
  {
    key: '1',
    weaponName: 'Manopla',
    attack: '+4',
    damage: '1d3+5'
  },
  {
    key: '2',
    weaponName: 'Everton',
    attack: '+50',
    damage: '4d10+100',
  },
];

export default function () {
  const[visible, setVisible] = useState(false);

    return (
        <div className="inventoryContainer">
            <div className="tableWeapon">
                <Table columns={columns} dataSource={data} />
            </div>
            <div className="modalAddWeapon">
                <Button type="primary" onClick={() => setVisible(true)}>
                    Adicionar
                </Button>
                <Modal
                  title="Adicione suas armas"
                  centered
                  visible={visible}
                  onOk={() => setVisible(false)}
                  onCancel={() => setVisible(false)}
                >
                  <Form>
                    <Form.Item label="Arma" name="weaponName">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Ataque" name="weaponAttack">
                      <InputNumber />
                    </Form.Item>
                    <Form.Item label="Dano" name="weaponDamage">
                      <Input />
                    </Form.Item>
                  </Form>
                </Modal>
            </div>
        </div>
    )
}