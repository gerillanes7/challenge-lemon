import { Container } from '@chakra-ui/react'
import Navbar from '../Navbar'
// styles
import './Layout.css'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container maxW='container.xl' mt={6}>
                {children}
            </Container>
            <footer className='footer'>
                Covid tracker - by German Illanes
            </footer>
        </>
    )
}

export default Layout