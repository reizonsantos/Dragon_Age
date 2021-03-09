import React from 'react'
import './story.css'
import 'antd/dist/antd.css';

import { Input } from 'antd'
const { TextArea } = Input;

export default function () {
    return (
        <div className='storyContainer'>
            <p>Conceito, Objetivo e Ligações</p>
            <TextArea 
                autoSize={{ minRows: 3, maxRows: 6 }}
            />
        </div>
    )
}