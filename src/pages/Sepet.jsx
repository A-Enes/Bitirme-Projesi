import React, { useEffect, useState } from "react";
import { useNavigate  } from 'react-router-dom';

function Sepet() {
  const navigate = useNavigate()
  const [data, setData] = useState([]);

  useEffect(() => {
    const userID = localStorage.getItem("userID");
    setData(JSON.parse(localStorage.getItem(`sepet_${userID}`))); 
  }, []);

  const silFonk = (index) => {
    const userID = localStorage.getItem("userID");
    const updatedData = data.filter((_, i) => i !== index); 
    localStorage.setItem(`sepet_${userID}`, JSON.stringify(updatedData));
    setData(updatedData);
  };

  const onayla = () => {
    alert('İşlem başarıyla tamamlandı ürünlerinizi güzel günlerde kullanmanız dileğiyle hoşçakalın!')
    const userID = localStorage.getItem("userID");
    localStorage.setItem(`sepet_${userID}`, JSON.stringify([]));
    navigate('/')

  }

  return (
    <>
      <div className="container">
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <h1>Sepet</h1>
          {!data ||  data.length === 0 ? (
            <h4></h4>
          ) : (
            <h4>
              Sepetinize eklemiş oldugunuz ürünler aşağıda listelenmiştir.
            </h4>
          )}
        </div>
        <article>
          <ul>
            {!data || data.length === 0 ? (
              <h3 style={{ textAlign: "center" }}>
                Hesabınıza kayıtlı sepetinizde hiç bir ürün bulunmuyor!
              </h3>
            ) : (
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", textAlign:'center', verticalAlign:'center' }}>
                {data?.map((item, index) => (
                  <div
                    key={index}
                    className="product-card"
                    style={{
                      width: "30%",
                      padding: "10px",
                      boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "80%" }}
                    />
                    <div className="product-info">
                      <span>{item.title}</span>
                      <p>{item.price}$</p>
                    </div>
                    <button
                      onClick={() => silFonk(index)}
                      style={{
                        backgroundColor: "red",
                        border: "1px solid red",
                        borderRadius: "10px",
                      }}
                    >
                      <i className="fa-solid fa-trash"></i> Sepetten Çıkar
                    </button>
                  </div>
                ))}
                 <button className="outline" style={{width:'100%', height:'80px', borderRadius:'15px'}} onClick={()=> onayla()}>Sepeti Onayla</button>
              </div>
            )}
          </ul>
          
        </article>
      </div>
    </>
  );
}

export default Sepet;
