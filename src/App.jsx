import { useState, useEffect } from 'react'
import SiteRoute from './SiteRoute.jsx'
import Navbar from './components/Navbar'
import { useNavigate } from 'react-router-dom' 

function App() {
const navigate = useNavigate()

  const [login, SetLogin] = useState(false) // sitedeki login durumunu tutan useState
  const [data, SetData] = useState([]) // sepetleri tutacagımız promp olarak gönderecegimiz data "data"

  useEffect(()=>{ 
      const loginStatus = JSON.parse(localStorage.getItem('login')) // localStorageden login durumunu cekiyoruz
      const sepetData = JSON.parse(localStorage.getItem('sepet')) 
      SetData(sepetData)
      SetLogin(loginStatus)
  },[])



  function LogOut() { 
    localStorage.setItem("login", JSON.stringify(false));
    localStorage.removeItem("userID");
       navigate("/")
    window.location.reload();
    alert("Hesapdan Başarıyla Çıkış Yapıldı!")
  }
  

  return (
    <>
    <Navbar logOut={LogOut}/>
<SiteRoute durum={login} sepet={data}/>
    </>
  )
}

export default App
