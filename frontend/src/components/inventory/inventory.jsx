import React from 'react'
import './inventory.css'
import 'antd/dist/antd.css';

import { Table } from 'antd';

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
    return (
        <div className="inventoryContainer">
            <div className="tableWeapon">
                <Table columns={columns} dataSource={data} />
            </div>
            <div>
                Botao de adicionar
            </div>
        </div>
    )
}