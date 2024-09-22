import React from 'react';
import './Css/Progressive.css'

export default function ProgressiveBar({ progress }) {
  const dynamicStyle = {
    backgroundColor: (progress < 20 ? "#FF0000" : progress < 40 ? "#FFA500" : progress < 60 ? "#FFFF00" : progress < 80 ? "#90EE90" : progress < 100 ? "#008000" : "#008000"),
    width: `${progress}%`,
    color: 'white'
  }

  return (
    <div>
      <div className="parent">
        <div className="child" style={dynamicStyle}>
          {progress > 0 && <span className='percent'>{progress}%</span>}
        </div>
      </div>
    </div>
  )
}
