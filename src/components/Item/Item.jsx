import React from 'react';
import './item.css'

const Item = ({id , title , bgColor}) => {
  return (
    <div 
      className='items'
      style={{
        '--bg-color':bgColor
      }}
    >
      <span>{id}</span>
      <span>{title}</span>
    </div>
  )
}

export default Item
