import React from 'react'



function Haberler() {
  return (
    <>
 <div className='container'>
  <h1 style={{ textAlign: 'center', marginTop: '30px', color: 'green', fontSize: '45px' }}>Haberler</h1>
  <article style={{ borderRadius: '25px', marginBottom: '10px' }}>
    <div>
      <img src="https://www.meram.bel.tr/upload/medya/2_250.jpg" alt="" />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
        <h3 style={{ margin: '10px', paddingTop:'1000px', color:'green', paddingLeft:'100px' }}>BİZİM MERAM MASASI BEŞ YILLIK KARNESİYLE GÖZ DOLDURDU...</h3>
      </div>
    </div>
  </article>
</div>

    </>
  )
}

export default Haberler