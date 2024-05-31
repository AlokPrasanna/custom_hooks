import React from 'react';
import './primaryButton.css'

const PrimaryButton = ({buttonName, buttonColor , onClickFunc}) => {
  return (
    <div>
      <button
        style={{
          '--button-bg-color':buttonColor
        }}
        onClick={onClickFunc}
      >
        {buttonName}
      </button>
    </div>
  )
}

export default PrimaryButton
