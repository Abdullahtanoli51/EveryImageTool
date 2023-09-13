import React, { useState } from 'react'
import { ReactCrop } from 'react-image-crop'

const CropComponent = () => {
  const [file ,SelectFile]=useState(null)
const [image,setImage]=useState(null)
const [crop,setCrop]=useState({aspect: 16/9})

  const HandleFileChange=e=>{
SelectFile(URL.createObjectURL(e.target.file[0]))
  }
  return (
    <div className='Container'>
      <div className='row'>
        <div className='col-lg-6'>
            <input type='file' accept='images/*' onChange={HandleFileChange}></input>

        </div>
        <div className='col-6'>
          {
            src && (
              <ReactCrop 
              crop={crop}
              onChange={setCrop}
              src={src}
              onImageLoaded={setImage}
              ></ReactCrop>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default CropComponent