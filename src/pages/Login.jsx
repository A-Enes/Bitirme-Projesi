import { useEffect, useState } from "react";
import React  from 'react'
import { useNavigate  } from 'react-router-dom';
import SiteRoute from '../SiteRoute'
import Baskan from'./Baskan'

function Login() {
  const navigate = useNavigate();

    const loginForm = { email: "", password: "" };
    const [loginFormData, setLoginFormData] = useState(loginForm);

    const [isLoggedIn, setIsLoggedIn] = useState(() => {
      const Durum = localStorage.getItem("login");
      return Durum ? JSON.parse(Durum) : false;
    });

    const [data, setData] = useState([])



    
  

    useEffect(() => {
      const storedData = localStorage.getItem("registerData");
      if (storedData) {
        const data = JSON.parse(storedData);
        if (JSON.stringify(data) !== JSON.stringify("registerData")) { //"" olcak kaydolda olmıcak
          setData(data); // State'i güncelle sadece eğer farklı ise
        }
      }
    }, []);

 
    useEffect(() => {
      localStorage.setItem("login", JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);




    const hesapYokStyle = {
      color: '#777',
    };
  
    const kaydolStyle = {
      color: '#fff',
      padding: '5px',
    };



    function FormSubmit(event, formType) {
      event.preventDefault(); // eger böyle olmassa sıfırlanmıyor
  
      if (formType === "login") {
        const foundUser = data.find((user) =>user.email === loginFormData.email && user.password === loginFormData.password);
  
           if (foundUser) {
            alert(`Giriş Başarılı Hoşgeldin ${foundUser.username}!`);
            setLoginFormData(loginForm);
          setIsLoggedIn(true);

          const userID = data.findIndex((user) => user.email === foundUser.email);  // fındIndex ile sırasını buluoz.
          localStorage.setItem("userID", userID); // bulunan sırayı locale kaydediyoruz.

          localStorage.setItem("login", JSON.stringify(true));
          navigate("/")
           window.location.reload();
        } else {
          alert("Giriş Başarısız! Girdiğiniz bilgilerle eşleşen bir hesap bulamadım.");
        }
        
      } 
    }

  return (
    <>
    <div className="container">
    <form onSubmit={(event) => FormSubmit(event, "login")} style={{margin:'auto', width:'850px'}}>  {/*    {(event) => FormSubmit(event, "login")} */}
      <div className="grid">
        <article>
          <h3 style={{textAlign:'center', fontSize:'50px'}}>Giriş</h3>
          <label htmlFor="email">
            Email Adres
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Emailinizi giriniz."
              required
              value={loginFormData.email}
              style={{borderRadius:'15px'}}
              onChange={(e) =>
                setLoginFormData({ ...loginFormData, email: e.target.value })
              }
              autoComplete="mail"
            />
          </label>

          <label htmlFor="password">
            Şifre
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Şifrenizi Giriniz"
              required
              value={loginFormData.password}
              style={{borderRadius:'15px'}}
              onChange={(e) =>
                setLoginFormData({
                  ...loginFormData,
                  password: e.target.value,
                })
              }
              autoComplete="current-password"
            />
          </label>
          <button type="submit" className="outline" style={{borderRadius:'15px'}}>
            Giriş Yap
          </button>
          <p style={{textAlign:'center', marginTop:'35px'}}>
      <span style={hesapYokStyle}>Hesabın Yokmu?</span>
      <a style={kaydolStyle} onClick={()=> navigate('/kaydol')}>Kaydol</a>
    </p>

        </article>
      </div>
    </form>
    </div>
    </>
  )
}

export default Login