import React from 'react'
import './information.css'
import { Form, Figure } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function () {
    return (
        <div className="informationContainer">
            <div className="characterDate">
                <Form >
                    <Form.Group controlId="name">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Nome do personagem" />
                        <Form.Label>Raça</Form.Label>
                        <Form.Control type="text" placeholder="Raça do personagem" />
                        <Form.Label>Idade</Form.Label>
                        <Form.Control type="text" placeholder="Idade do personagem" />
                        <Form.Label>Sexo</Form.Label>
                        <Form.Control type="text" placeholder="Sexo do personagem" />
                    </Form.Group>
                </Form>
            </div>
            <div className="characterImage">
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src="../assets/imgs/dragonageCharacter.png"
                    />
                </Figure>
            </div>
        </div>
        
    );
}