import { useEffect, useContext } from 'react'

import Layout from "../Components/Layout"
import CovidContext from '../Context/CovidContext/CovidContext'

import { SimpleGrid } from '@chakra-ui/react'
import CountryCard from '../Components/CountryCard'

const Home = () => {

    const { countries, getCountries } = useContext(CovidContext)

    useEffect(() => {
        getCountries()
    }, [])

    return (
        <Layout>
            <SimpleGrid columns={3} spacing={10}>
                {
                    countries?.map(({Country: country, ISO2: code, Slug: slug}) => (
                        <CountryCard name={country} code={code} slug={slug} />
                    ))
                }
            </SimpleGrid>
        </Layout>
    )
}

export default Home