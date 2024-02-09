import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';




function Kaydol() {
    const navigate = useNavigate();

    const registerForm = { username: "", email: "", password: "", };  // varsayılan bunlar

    const [registerFormData, setRegisterFormData] = useState(registerForm);
    const [registerData, setRegisterData] = useState([]);
    const [kayıtWin, setKayıtWin] = useState(false);


  useEffect(() => {
    const storedData = localStorage.getItem("registerData");
    if (storedData) {
      const data = JSON.parse(storedData);
      if (JSON.stringify(data) !== JSON.stringify(registerData)) {
        setRegisterData(data); // State'i güncelle sadece eğer farklı ise
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("registerData", JSON.stringify(registerData));
  }, [registerData]);


  useEffect(() => {
    if (registerData.length > 0) {
      navigate("/login");
    }
  }, [kayıtWin]);
  
  


  async function FormSubmit(event, formType) {
    event.preventDefault(); // eger böyle olmassa sıfırlanmıyor

  if (formType === "register") {
      const zatenMailVar = registerData.find((user) => user.email === registerFormData.email);
      const usernameVar = registerData.find((user)=> user.username === registerFormData.username)
  
      if(usernameVar){
      return alert("Bu username daha önceden alınmış lütfen başka bir username giriniz.")
      }

      if (zatenMailVar) {
     return alert("Bu mail adresi zaten kayıtlı!");
       } else {
        setRegisterData((prevData) => [...prevData, registerFormData])
        console.log("Kayıt Ol Butonuna Tıklandı");
        alert("Kaydınız başarıyla oluşturuldu")
        setRegisterFormData(registerForm)
        setKayıtWin(true)
 
      }

    }
  }



  const hesapVarStyle = {
    color: '#777',
  };

  const LoginStyle = {
    color: '#fff',
    padding: '5px',
  };

  return (
    <div className='container'>
  <form onSubmit={(event) => FormSubmit(event, "register")} style={{margin:'auto', width:'850px'}}>
        <div className="grid">
          <article style={{marginTop:'px'}}>
            <h3 style={{textAlign:'center', fontSize:'50px'}}>Kaydol</h3>
            <label htmlFor="username">
              Username
              <input
                type="username"
                id="registerUsername"
                name="registerUsername"
                required
                value={registerFormData.username}
                style={{borderRadius:'15px'}}
                onChange={(e) =>
                  setRegisterFormData({
                    ...registerFormData,
                    username: e.target.value,
                  })
                }
                autoComplete="username"
              />
            </label>

            <label htmlFor="email">
              Email Adres
              <input
                type="email"
                id="registerEmail"
                name="registerEmail"
                required
                value={registerFormData.email}
                style={{borderRadius:'15px'}}
                onChange={(e) =>
                  setRegisterFormData({
                    ...registerFormData,
                    email: e.target.value,
                  })
                }
                autoComplete="email"
              />
            </label>

            <label htmlFor="password">
              Şifre
              <input
                type="password"
                id="registerPassword"
                name="registerPassword"
                required
                value={registerFormData.password}
                style={{borderRadius:'15px'}}
                onChange={(e) =>
                  setRegisterFormData({
                    ...registerFormData,
                    password: e.target.value,
                  })
                }
                autoComplete="current-password"
              />
            </label>

            <div style={{ display: "flex", alignItems: "center" }}>
              <button type="submit" className="outline" style={{borderRadius:'15px'}}>
                Kayıt Ol
              </button>
            </div>
            <p style={{textAlign:'center', marginTop:'20px'}}>
      <span style={hesapVarStyle}>Hesabın Zaten Varmı?</span>
      <a style={LoginStyle} onClick={()=> navigate('/login')}>Giriş</a>
    </p>
          </article>
        </div>
        </form>
    </div>
  )
}

export default Kaydol