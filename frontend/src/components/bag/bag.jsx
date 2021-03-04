import React from 'react'
import './bag.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl } from 'react-bootstrap'

export default function () {
    return (
        <div className='bagContainer'>
            <InputGroup>
                    <p>Equipamento e Dinheiro</p>
                    <FormControl as="textarea" />
                </InputGroup>
        </div>
    )
}