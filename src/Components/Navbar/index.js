import {useContext} from 'react'

import { Heading, Button } from '@chakra-ui/react'
import {BiArrowToRight} from 'react-icons/bi'
import AuthContext from '../../Context/AuthContext/AuthContext'

// styles
import './Navbar.css'

const Navbar = () => {

    const { removeUserLogged } = useContext(AuthContext) 

    return (
        <header>
            <nav className='navbar'>
                <Heading as='h2' size='xl' color='white'>Covid Tracker</Heading>
                <Button rightIcon={<BiArrowToRight />} colorScheme='teal' onClick={removeUserLogged}>Log out</Button>
            </nav>
        </header>
    )
}


export default Navbar