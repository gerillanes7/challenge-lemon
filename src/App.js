import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import AuthState from './Context/AuthContext/AuthState';
import RequireAuth from './Components/RequireAuth/index'
import CovidState from './Context/CovidContext/CovidState';
import ConfirmedCases from './Pages/ConfirmedCases';


function App() {

  return (
    <ChakraProvider theme={theme}>
      <AuthState>
        <CovidState>
          <Routes>
            <Route path='/' element={<LogIn />} />
            <Route element={<RequireAuth />}>
              <Route path='/home' element={<Home />} />
              <Route path='/confirmed-cases/:slug' element={<ConfirmedCases />} />
            </Route>
          </Routes>
        </CovidState>
      </AuthState>
    </ChakraProvider>
  );
}

export default App;
