import React from 'react'
import './spells.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl } from 'react-bootstrap'

export default function () {
    return (
        <div className='spellsContainer'>
            <InputGroup>
                    <p>Poderes de classe e Feitiço</p>
                    <FormControl as="textarea" />
                </InputGroup>
        </div>
    )
}