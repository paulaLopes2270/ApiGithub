import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

//componentes:
import Home from './pages/Home'
import Repositories from './pages/Repositories'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}   />
                <Route path='/repositories' element={<Repositories/>} />
            </Routes>
        </BrowserRouter>
    )
}