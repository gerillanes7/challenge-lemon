import axios from 'axios'
import {useState} from 'react'
import CovidContext from './CovidContext'

const CovidState = ({children}) => {

    const [countries, setCountries] = useState([])
    const [countryName, setCountryName] = useState('')
    const [confirmedCasesBySlug, setConfirmedCasesBySlug] = useState([])

    const getCountries = async () => {
        try {
            const res = await axios.get('https://api.covid19api.com/countries')
            setCountries(res.data)
        } catch (e) {
            console.log(e);
        }
    }

    const getConfirmedCasesBySlug = async (slug) => {
        try {
            const res = await axios.get(`https://api.covid19api.com/total/dayone/country/${slug}/status/confirmed`)
            setConfirmedCasesBySlug(res.data)
        } catch (e) {
            console.log(e);
        }
    }

    const sortConfirmedCases = (type, by) => {
        let casesSorted;
        if(type === 'highest') {
            casesSorted = [...confirmedCasesBySlug]?.sort((a, b) => {
                if(by === 'cases') {
                    return b.Cases - a.Cases
                }

                if(by === 'date') {
                    return new Date(b.Date) - new Date(a.Date)
                }
            })
        }

        if(type === 'lowest') {
            casesSorted = [...confirmedCasesBySlug]?.sort((a, b) => {
                if(by === 'cases') {
                    return a.Cases - b.Cases
                }

                if(by === 'date') {
                    return new Date(a.Date) - new Date(b.Date)
                }
            })
        }

        setConfirmedCasesBySlug(casesSorted)
    }

    return (
        <CovidContext.Provider value={{
            countries,
            getCountries,
            countryName,
            setCountryName,
            confirmedCasesBySlug,
            getConfirmedCasesBySlug,
            sortConfirmedCases,
        }}>
            {children}
        </CovidContext.Provider>
    )
}

export default CovidState