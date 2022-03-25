import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Garaje from '../components/Garaje'
import Registro from '../components/Registro'

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Garaje />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter