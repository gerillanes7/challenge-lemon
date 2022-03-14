import {useState, useContext} from 'react'

import { Button, Heading, Text } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

import { useNavigate } from "react-router-dom";

import './LogIn.css'
import AuthContext from '../Context/AuthContext/AuthContext';

const LogIn = () => {

    let navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: '', password: ''
    })

    const { setUserLogged } = useContext(AuthContext)

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const logIn = () => {
        const { username, password} = userData;
        if(username === 'lemon' && password === 'cash') {
            setUserLogged(userData)
            navigate('/home')
        }
    }

    return (
        <div className='login-container'>
            <Heading as='h2' size='2xl' m='4' color='white'>
                INICIAR SESION
            </Heading>
            <div className='form-container'>
                <Text mb='8px'>Username</Text>
                <Input placeholder='Enter username' marginBottom={4} name='username' onChange={handleChange}/>
                <Text mb='8px'>Password</Text>
                <Input placeholder='Enter password' name='password' type='password' onChange={handleChange}/>
                <div>
                    <Button colorScheme='teal' onClick={logIn}>
                        Log in
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LogIn