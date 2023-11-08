import React from 'react'

export default function NodeMonth({data}) {
  const month = data.month;
  
  return (
    <div className={'month_node'}>
        <p style={{ textAlign: "center", fontSize: 30, WebkitTextFillColor: 'black'}}>{month}</p>
    </div>
  )
}
