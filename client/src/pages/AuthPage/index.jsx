import React from 'react'
import LoginLayout from '../../layout/LoginLayout'
import Auth from '../../components/Auth'
import HomeBtn from '../../components/HomeBtn'

const AuthPage = () => {
    return (
        <LoginLayout>
            <HomeBtn />
            <Auth />
        </LoginLayout>
    )
}

export default AuthPage
