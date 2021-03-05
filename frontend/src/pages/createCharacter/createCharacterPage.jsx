import React from 'react';
import './createCharacterPage.css'
import 'antd/dist/antd.css';

import { Layout } from 'antd'
import Menu from '../../components/menu/menu'
import CreateCharacter from '../../components/pageCreateCharacter/createCharacter'


const { Content, Footer, Sider } = Layout;



export default function CreateAccountPage() {

    return(
        <Layout>
            <Sider className="layout">
                <Menu />
            </Sider>
            <Layout>
                <Content>
                    <CreateCharacter />
                </Content>
                <Footer className="footer">
                    Dragon Age ©2021 Created by Reizon Santos
                </Footer>
            </Layout>
        </Layout>
    )
}