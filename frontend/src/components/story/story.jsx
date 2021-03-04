import React from 'react'
import './story.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl } from 'react-bootstrap'

export default function () {
    return (
        <div className='storyContainer'>
            <InputGroup>
                    <p>Conceito, Objetivo e Ligações</p>
                    <FormControl as="textarea" />
                </InputGroup>
        </div>
    )
}