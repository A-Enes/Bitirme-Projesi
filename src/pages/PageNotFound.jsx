import React from 'react'
import {Link} from 'react-router-dom'



function PageNotFound() {
  return (
    <>
    <div className='container' style={{marginTop:'100px'}}>


    
    <h1 style={{marginLeft:'350px'}}>404 - Sayfa Bulunamadı</h1>
    <Link to='/'> <button className='outline' style={{width:'800px', margin:'auto'}}> Ana Sayfaya Gitmek İçin Tıklayınız.</button> </Link>
    </div>
    </>
  )
}

export default PageNotFound