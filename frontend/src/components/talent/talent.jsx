import React from 'react'
import './talent.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl } from 'react-bootstrap'

export default function () {
    return (
        <div className='talentContainer'>
            <InputGroup>
                    <p>Talento e Idiomas</p>
                    <FormControl as="textarea" />
                </InputGroup>
        </div>
    )
}