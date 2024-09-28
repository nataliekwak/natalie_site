import React from 'react'

function Project({ title, image, description }) {
  return (
    <div className='slide-container'>
        <img src={image} alt={title} />
        <div className='description'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Project