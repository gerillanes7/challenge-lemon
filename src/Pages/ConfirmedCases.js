import { useEffect, useContext, useState } from 'react'

import { useNavigate, useParams } from "react-router-dom"
import Layout from "../Components/Layout"
import CovidContext from '../Context/CovidContext/CovidContext'

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Heading,
    Box,
    Button,
    IconButton,
    Text
} from '@chakra-ui/react'

import { BiArrowBack } from "react-icons/bi";

const ConfirmedCases = () => {

    let { slug } = useParams()

    let navigate = useNavigate()

    const { confirmedCasesBySlug, getConfirmedCasesBySlug, sortConfirmedCases, countryName } = useContext(CovidContext)

    useEffect(() => {
        getConfirmedCasesBySlug(slug)
    }, [])


    return (
        <Layout>
            <Box display='flex'>
                <IconButton
                    colorScheme='teal'
                    aria-label='Go back'
                    icon={<BiArrowBack />}
                    mr={4}
                    onClick={() => navigate('/home')}
                />
                <Heading as='h2' size='xl' mb={4}>
                    Cases confirmed in {countryName}
                </Heading>
            </Box>
            <Box>
                <Button colorScheme='teal' size='md' onClick={() => sortConfirmedCases('highest', 'cases')}>
                    Sort by cases highest
                </Button>
                <Button colorScheme='teal' ml={4} size='md' onClick={() => sortConfirmedCases('lowest', 'cases')}>
                    Sort by cases lowest
                </Button>
                <Button colorScheme='teal' ml={4} size='md' onClick={() => sortConfirmedCases('highest', 'date')}>
                    Sort by date highest
                </Button>
                <Button colorScheme='teal' ml={4} size='md' onClick={() => sortConfirmedCases('lowest', 'date')}>
                    Sort by date lowest
                </Button>
            </Box>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Cases</Th>
                        <Th>Date</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        confirmedCasesBySlug?.length > 0 ? confirmedCasesBySlug.map(({ Cases: cases, Date: date, Status: status }) => (
                            <Tr key={date}>
                                <Td>{cases}</Td>
                                <Td>{date}</Td>
                                <Td>{status}</Td>
                            </Tr>
                        )) : <Tr>
                            <Td>
                                <Text fontSize='3xl'>No details for this country</Text>
                            </Td>
                        </Tr>
                    }
                </Tbody>
            </Table>
        </Layout>
    )
}

export default ConfirmedCases