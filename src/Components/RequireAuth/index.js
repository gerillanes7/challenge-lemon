import { useContext} from 'react'

import { Navigate, Outlet, useLocation } from 'react-router-dom'

import AuthContext from '../../Context/AuthContext/AuthContext'

const RequireAuth = () => {
    const user = useContext(AuthContext)

    if(!user.userLogged) {
        return <Navigate to='/' />
    }

    return <Outlet />

}

export default RequireAuth