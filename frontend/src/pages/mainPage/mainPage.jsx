import React from 'react';
import './mainPage.css'
import 'antd/dist/antd.css';

import { Layout } from 'antd'
import Menu from '../../components/menu/menu'
import Login from '../../components/pageLogin/login'

const { Content, Footer, Sider, Header } = Layout;



export default function MainPage() {

    return(
        <Layout>
            <Sider className="layout">
                <Menu />
            </Sider>
            <Layout>
                <Content>
                    <Login />
                </Content>
                <Footer className="footer">
                    Dragon Age ©2021 Created by Reizon Santos
                </Footer>
            </Layout>
        </Layout>
    )
}