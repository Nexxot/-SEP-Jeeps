import React from 'react'

export default function MetaView({loadedData,clickedNodeID}) {
  return (
    <div>
        {loadedData
                  .filter((data) => data.id ===  clickedNodeID)
                  .map((dataObject, index) => (
                  Object.entries(dataObject)
                  .filter(([key]) => key !== 'id')
                  .map(([key, value]) => (
                  <div key={key} style={{marginLeft: "1vw" , marginRight: "1vw", marginTop: "1vh" , backgroundColor: "#f5f9fa"}}>
                    {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
                  </div>
                  ))
        ))}
        <button className="edit-button" onClick={{/* Füge hier die Metadaten hinzu, die du anzeigen möchtest */}}>Edit</button>
    </div>
  )
}
