import React from 'react'
import './bag.css'
import 'antd/dist/antd.css';

import { Input } from 'antd'
const { TextArea } = Input;

export default function () {
    return (
        <div className='bagContainer'>
            <p>Equipamento e Dinheiro</p>
            <TextArea 
                autoSize={{ minRows: 3, maxRows: 6 }}
            />
        </div>
    )
}