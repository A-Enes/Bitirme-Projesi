import React, { useEffect, useState } from 'react';
import '../style/Alısveris.css';

function Alisveris({durum}) { // SiteRoute'dan gönderdiğimiz içeriginde sitede login durumunu tutan prompu cekiyoruz.
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const userID = localStorage.getItem("userID");
    const data = JSON.parse(localStorage.getItem(`sepet_${userID}`))|| [];
    setData(data);

    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Hata', error));
  }, []);



  const ürünEkle = (product) => {
    if(!durum){
      return alert('Sepete eklemek için önce giriş yapmanız gerekmektedir.')
    }

    const zatenVarmi = data.some(item => item.id === product.id);
    if (!zatenVarmi) {
      const güncelData = [...data, product];
      setData(güncelData);

      const userID = localStorage.getItem("userID");
      localStorage.setItem(`sepet_${userID}`, JSON.stringify(güncelData));
    } else {
      alert('Bu ürün zaten sepetinizde bulunmaktadır.');
    }
  };

  return (
    <div className='container'>
      <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Ürünler</h2>
      <article>
        <header> - Aşağıda belediyemiz tarafından satışa sunulan ürünler verilmiştir.</header>
        <div className="product-container">
          {products.map(product => (
            <div key={product.id} className="product-box">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <button className='outline' onClick={() => ürünEkle(product)}>
                <i className="fa-solid fa-cart-plus"></i> Sepete Ekle
              </button>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}

export default Alisveris;
