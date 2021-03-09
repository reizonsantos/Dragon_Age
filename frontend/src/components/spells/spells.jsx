import React from 'react'
import './spells.css'
import 'antd/dist/antd.css';

import { Input } from 'antd'
const { TextArea } = Input;

export default function () {
    return (
        <div className='spellsContainer'>
            <p>Poderes de Classe e Feitiço</p>
            <TextArea 
                autoSize={{ minRows: 2, maxRows: 6 }}
            />
        </div>
    )
}