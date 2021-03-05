import React from 'react'
import './App.css'

import MainPage from '../pages/mainPage/mainPage'
import CreateAccount from '../pages/createAccount/createAccountPage'
import CreateCharacter from '../pages/createCharacter/createCharacterPage'
import Information from '../components/information/information'

export default function () {
    return (
        <div>
            <CreateCharacter />
        </div>
    )
}