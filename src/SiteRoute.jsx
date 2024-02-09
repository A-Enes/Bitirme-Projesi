import React from "react";
import { Route, Routes } from "react-router-dom";
import {Home, Baskan, Haberler, Duyurular, Login, Kaydol, PageNotFound, Alısveris, Sepet, Meram, İletişim, Site} from './pages'


function SiteRoute({durum, sepet}) {
  return (
  
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/baskan" element={<Baskan/>}/>
        <Route path="/meram" element={<Meram/>}/>
        <Route path="/haberler" element={<Haberler/>}/>
        <Route path="/duyurular" element={<Duyurular/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/kaydol" element={<Kaydol/>}/>
        <Route path="/site" element={<Site/>}/>
        <Route path="/iletişim" element={<İletişim/>}/>
        <Route path="/alısveris" element={<Alısveris durum={durum}/>}/>
        <Route path="/sepet" element={<Sepet sepet={sepet}/>}/>
  
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
   
  )
}

export default SiteRoute