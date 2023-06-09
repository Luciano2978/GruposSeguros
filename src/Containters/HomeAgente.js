import 'bootstrap/dist/css/bootstrap.min.css';
import "../Assets/css/Home.css";
import Sidebar from '../Components/Sidebar';
import {Route, Routes } from 'react-router-dom';
import Portada from "../Components/Carrousel";
import AddClient from '../Components/AddClient';
import ListarCliente from '../Components/ListarCliente';

export default function HomeAgente(){
    

    return(
        <>

            <div className='flex'>
                <Sidebar></Sidebar>
                <div className='content w-100'>
                    {/* Para poder realizar la navegacion del sidebar*/}
                    <Routes>
                        <Route exact path='/Portada' Component={Portada} ></Route>
                        <Route exact path='/addClient' Component={AddClient}></Route>
                        <Route exact path='/ListarCliente' Component={ListarCliente}></Route>
                    </Routes>
                </div>
            </div>
        
        </>
    )
}
