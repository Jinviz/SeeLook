import React, { useState } from 'react'
import Photo from '../../components/Photo/Photo'


const Lookbook = () => {
  const [imageData, setImageData] = useState([])
  return (
    <>
      <Photo data={imageData}/>
    </>
  )
}

export default Lookbook
