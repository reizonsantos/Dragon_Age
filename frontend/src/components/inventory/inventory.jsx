import React from 'react'
import './inventory.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap'

export default function () {
    return (

        <div className="inventoryContainer">
            <Table responsive="md">
                <tread>
                    <tr>
                        <th>Arma</th>
                        <th>Ataque</th>
                        <th>Dano</th>
                    </tr>
                </tread>
                <tbody>
                    <tr>
                        <th>Manopla</th>
                        <th>+4</th>
                        <th>1d4+5</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}