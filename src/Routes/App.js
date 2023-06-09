import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeAgente from '../Containters/HomeAgente';

export default function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/*" element={<ProSidebarProvider><Layout><HomeAgente/></Layout></ProSidebarProvider>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}