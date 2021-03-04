import React from 'react'
import './menu.css'

import { Menu } from 'antd'
import { render } from '@testing-library/react';

const { SubMenu } = Menu;


export default function () {
    return (
        <Menu defaultSelectedKeys={['1']} mode="inline" theme="dark">
            <Menu.Item key="1">Início</Menu.Item>
            <Menu.Item key="1">Criar Personagem</Menu.Item>
            <Menu.Item key="1">Vizualizar Ficha</Menu.Item>
        </Menu>
    )
}