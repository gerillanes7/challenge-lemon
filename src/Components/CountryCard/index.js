import {useContext} from 'react'

import { Box, Heading, Text, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import CovidContext from '../../Context/CovidContext/CovidContext'

import './CountryCard.css'

const CountryCard = ({ name, code, slug }) => {

    let navigate = useNavigate()

    const { setCountryName } = useContext(CovidContext)

    const goToConfirmedCases = () => {
        navigate(`/confirmed-cases/${slug}`)
    }

    return (
        <Box bg='#494d5f' p={4} color='white' className='card-container'>
            <Heading as='h4' size='md'>
                {name}
            </Heading>
            <Text fontSize='lg'>{code}</Text>
            <Button colorScheme='teal' onClick={() => {goToConfirmedCases(); setCountryName(name);}}>Show more</Button>
        </Box>
    )
}

export default CountryCard