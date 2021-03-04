import React from 'react'
import './status.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, ProgressBar, Container, Row, Col } from 'react-bootstrap'


export default function () {
    // Barra de exp
    const Exp = 60;

    // Barra de Vida e Mana
    const MaxHp = 50;
    const CurrentHp = 45;

    const MaxMp = 45;
    const CurrentMp = 30;

    return (
        <div className="statusContainer">
            <Container>
                <Row>
                    <Col>
                        <div className="characterClass">
                        <Table responsive="md">
                            <tread>
                                <tr>
                                    <th>Classe</th>
                                    <th>Nivel</th>
                                </tr>
                            </tread>
                            <tbody>
                                <tr>
                                    <td>Guerreiro</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </Table>
                        </div>
                        <div className="ExpBar">
                            <ProgressBar now={Exp} label={`${Exp}%`} />
                        </div>
                    </Col>
                    <Col>
                        <div className="lifeManaBar">
                            <p>HP</p>
                            <ProgressBar variant="sucess" now={CurrentHp} label={`${CurrentHp} / ${MaxHp}`} />
                            <p>MP</p>
                            <ProgressBar variant="info" now={CurrentMp} label={`${CurrentMp} / ${MaxMp}`}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>   
    )
}