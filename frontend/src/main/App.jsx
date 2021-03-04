import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React from 'react'
import { Container } from 'react-bootstrap'

import MainPage from '../pages/mainPage/mainPage'
import CreateAccount from '../pages/createAccount/createAccount'

export default function () {
    return (
        <div>
            <CreateAccount />
        </div>
    )
}