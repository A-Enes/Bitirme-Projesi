import React, {useEffect, useState} from "react";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import '../style/Navbar.css'


function Navbar({logOut}) {
const [durum, setDurum] = useState(false)


useEffect(() => {
  const durumlocal = localStorage.getItem("login");
  setDurum(durumlocal === "true")
}, []);


  return (
   
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link className="navbar-brand" to="/"> <i className="fa-solid fa-house"></i> </Link>
          </li>

          <li>
            <NavLink className="nav-brand" to="/baskan"> Başkan </NavLink>
          </li>

         

          <li className="bilgiler-dropdown" role="list" dir="rtl" style={{marginRight:'12px'}}>
      <a href="#" aria-haspopup="listbox">Bilgiler</a>
      <ul className="bb" role="listbox" style={{width:'40px', height:'155px'}}>
        <li><NavLink className="navbar-brand" to="/haberler">Haberler</NavLink></li>
        <li><NavLink className="navbar-brand" to="/duyurular">Duyurular</NavLink> </li>
        <li><NavLink className="navbar-brand" to="/site">Site Hakkında</NavLink> </li>
      </ul>
    </li>


    <li>
            <NavLink className="nav-brand" to="/meram"> Meram </NavLink>
          </li>


          <li>
            <NavLink className="nav-brand" to="/iletişim"> İletişim </NavLink>
          </li>

    <li>
            <NavLink className="nav-brand" to="/alısveris"> Alışveriş </NavLink>
          </li>

    <li>
    {durum ? (
  <>
    <NavLink style={{paddingLeft:'1px'}} className="nav-brand" onClick={logOut}>Logout</NavLink>
  </>
) : (
  <NavLink style={{paddingLeft:'1px'}} className="nav-brand" to="/login">Login</NavLink>
)} </li>
          {durum ? 
             <NavLink className="nav-brand" to="/sepet"> <i className="fa-solid fa-cart-shopping"></i></NavLink>
             : 
              <NavLink className="nav-brand"></NavLink>
            }
        </ul>
      </nav>
    </div>
    
  );
}

export default Navbar;
