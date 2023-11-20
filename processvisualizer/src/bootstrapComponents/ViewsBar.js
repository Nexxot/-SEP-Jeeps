import React from 'react'
import { Button } from 'react-bootstrap';
import './css/ViewsBarCss.css';
export default function ViewsBar({switchToView}) {

  return (
    <div>
        <Button variant="primary" className="buttonWider">Processlist</Button>
        <Button variant="primary" className='button' onClick={() => switchToView(1)}>Process 2D View</Button>
        <Button variant="primary" className='button' onClick={() => switchToView(2)}>Process 3D View</Button>
        <Button variant="primary" className="button" onClick={() => switchToView(3)}>Process Timeline</Button>
    </div>
  )
}
