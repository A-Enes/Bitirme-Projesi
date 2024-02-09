import React from 'react'
import { Link } from 'react-router-dom';



function Duyurular() {
let cardStyle = {
  backgroundColor: '#f8f9fa', // Kartın arka plan rengi
  borderRadius: '8px', // Kartın köşe yuvarlama
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Gölgelendirme
  marginBottom: '10px', // Kartlar arasındaki boşluk
  padding: '10px', // Kart içeriği arasındaki boşluk
  width: '400px', // Kartın genişliği
};

let divStyle = {
  border: '2px solid white',
};

let başlik = {
  color: 'black',
};

return (
  <>
    <div className='container'>
      <h1 style={{ textAlign: 'center', marginTop: '30px', color: 'green' }}>Duyurular</h1>

      <article style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
   
        <div>
          <article style={{ ...cardStyle, marginRight: '20px', marginLeft: '20px' }}>
            <Link to="https://www.meram.bel.tr/duyuru/m724-nolu-imar-uygulamasi-ilani-2"> 
            <div style={divStyle}>
              <h4 style={başlik}>M734 Nolu İmar Uygulaması İlanı</h4>
              <p>05 Ocak Cuma-2024</p>
            </div>
            </Link>
          </article>
       

          <article style={{ ...cardStyle, marginLeft: '20px' }}>
            <Link to="https://www.meram.bel.tr/duyuru/m732-nolu-imar-uygulamasi-ilani"> 
            <div style={divStyle}>
              <h4 style={başlik}>M732 Nolu İmar Uygulaması İlanı</h4>
              <p>20 Aralık Çarşamba 2023</p>
            </div>
            </Link>
          </article>
        </div>

        <div>
          <article style={{ ...cardStyle , marginRight: '20px', marginLeft: '20px' }}>
            <Link to="https://www.meram.bel.tr/duyuru/m724-nolu-imar-uygulamasi-ilani-2"> 
            <div style={divStyle}>
              <h4 style={başlik}>M734 Nolu İmar Uygulaması İlanı</h4>
              <p>27 Aralık Çarşamba - 2023</p>
            </div>
            </Link>
          </article>

          <article style={{ ...cardStyle, marginLeft: '20px' }}>
            <Link to="https://www.meram.bel.tr/duyuru/m733-nolu-imar-uygulamasi-ilani"> 
            <div style={divStyle}>
              <h4 style={başlik}>M733 Nolu İmar Uygulaması</h4>
              <p>15 Aralık Cuma - 2023</p>
            </div>
            </Link>
          </article>
        </div>
      </article>
    </div>
  </>
);

  
  
 
}

export default Duyurular