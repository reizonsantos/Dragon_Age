import React from 'react'
import './armor.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl } from 'react-bootstrap'

export default function () {
    return (
        <div className="armorContainer">
            <div>
                <div className="Speed">
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Velocidade</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" placement="bottom" />
                </InputGroup>
                </div>
                <div className="Defense">
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Defesa</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" placement="bottom" />
                </InputGroup>
                </div>
                <div className="Armor">
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Armadura</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" placement="bottom" />
                </InputGroup>
                </div>
            </div>
            <div>
                <InputGroup>
                    <FormControl as="textarea" placeholder="Tipo de Armadura" />
                </InputGroup>
            </div>
        </div>
    )
}





