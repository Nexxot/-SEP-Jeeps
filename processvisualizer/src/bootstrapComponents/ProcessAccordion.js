import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './css/NavBarCss.css'
export default function ProcessAccordion({data}) { 
    const title = data.title;
    const inside = data.inside;
    const color = data.color;
  return (
    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="1">
      <Accordion.Header>
      <label className='pushLabel'>{title} </label>
      <div className={'colorPrcoessSquare_' + color } data-testid="colorSquare"></div>
    </Accordion.Header>
      <Accordion.Body>
      {inside.map((item, index) => (
            <div key={index}>
              {'↳ ' + item}
            </div>
          ))}
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  )
}
