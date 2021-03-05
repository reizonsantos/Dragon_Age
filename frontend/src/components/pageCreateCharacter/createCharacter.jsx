import React from 'react';
import './createCharacter.css';
import 'antd/dist/antd.css';

import { Progress } from 'antd'

import Information from '../information/information'

export default function CreateCharacterPage() {
    const layout = {
        labelCol: {
            span: 10,
        },
        wrapperCol: {
            span: 17,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 9,
            span: 16,
        },
    };
    
    return(
        <div className="createCharacterContainer">
            <div>
                <Information />
            </div>
            <div>Paginação</div>
            <div className="progress">
                <Progress percent={50} status="active" />
            </div>
        </div>
    )
}