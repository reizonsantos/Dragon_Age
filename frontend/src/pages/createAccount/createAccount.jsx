import React from 'react';
import './createAccount.css'
import 'antd/dist/antd.css';

import { Layout } from 'antd'
import Menu from '../../components/menu/menu'
import CreateAccount from '../../components/pageCreateAccount/createAccount'

const { Content, Footer, Sider } = Layout;



export default function CreateAccountPage() {

    return(
        <Layout>
            <Sider className="layout">
                <Menu />
            </Sider>
            <Layout>
                <Content>
                    <CreateAccount />
                </Content>
                <Footer className="footer">
                    Dragon Age ©2021 Created by Reizon Santos
                </Footer>
            </Layout>
        </Layout>
    )
}


