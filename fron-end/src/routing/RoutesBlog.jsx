import React from 'react';
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Home } from '../components/pages/Home';
import { Articles } from '../components/pages/Articles';
import { Nav } from '../components/layout/Nav';
import { Sidebar } from '../components/layout/Sidebar';
import { Create } from '../components/pages/Create';
import { Search } from '../components/pages/Search';
import { Article } from '../components/pages/Article';
import { Update } from '../components/pages/Update';

export const RoutesBlog = () => {
  return (
    <BrowserRouter>
    
        <Header />
        <Nav />
            <section id='content' className='content'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/inicio" element={<Home />} />
                    <Route path="/articulos" element={<Articles />} />
                    <Route path="/crear-articulos" element={<Create />} />
                    <Route path="/buscar/:busqueda" element={<Search />} />
                    <Route path="/articulo/:id" element={<Article />} />
                    <Route path="/editar/:id" element={<Update />} />

                    <Route path="*" element={<div>ERROR 404</div>} />
                </Routes>
            </section>
        <Sidebar />
        <Footer />
    
    </BrowserRouter>
  )
}
