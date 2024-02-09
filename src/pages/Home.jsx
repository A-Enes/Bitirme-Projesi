import React from 'react'



function Home() {
  return (
    <>





{/* <div style={{
    backgroundImage: 'url("https://www.meram.bel.tr/upload/medya/compress/slayt-1-meram.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '89vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    borderRadius: '15px'
  }}>
  <div className='container' style={{ textAlign: 'center' }}>
    <h1 style={{ marginTop: '70px', fontSize: '40px', color: 'green' }}>Bizim Meram İçin Çalışıyoruz</h1>
    <img
      src="https://www.meram.bel.tr/upload/medya/baskan_12.png"
      style={{
        width: '26%',
        margin: '20px auto 40px',
        display: 'block',
        marginRight:'10px',
        marginBottom:'70px'
      }}
      alt="görsel bulunamadı!"
    />
    <div style={{ fontSize: '24px' }}>
      Mustafa Kavuş
      <p style={{ margin: '10px 0 50px' }}>Meram Belediyesi Başkanı</p>
    </div>
  </div>
</div> */}






<div style={{
    backgroundImage: 'url("https://www.meram.bel.tr/upload/medya/compress/slayt-1-meram.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '89vh',
    marginTop:'8px',
    width:'100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    borderRadius: '15px'
  }}>
  <div className='container' style={{ textAlign: 'center' }}>
    <h1 style={{ marginTop: '60px', fontSize: '40px', color: 'green', textAlign:'center', verticalAlign:'center' }}>Bizim Meram İçin Çalışıyoruz</h1>
    
    <img
      src="https://www.meram.bel.tr/upload/medya/baskan_12.png"
      style={{
        width: '26%',
        margin: '20px auto 0',
        display: 'block',
        marginRight:'10000px',
      }}
      alt="görsel bulunamadı!"
    />
    
    <div style={{fontWeight: 'bold', fontSize: '24px', marginBottom: '100px', marginRight:'820px', color:'white' }}>
      Mustafa Kavuş
      <p style={{fontWeight:'bold', margin: '10px', paddingBottom:'10px', color:'white' }}>Meram Belediyesi Başkanı</p>
    </div> 
  </div>
</div>
</>
  )
}

export default Home