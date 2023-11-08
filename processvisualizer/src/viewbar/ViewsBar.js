import React from 'react'
import { Button } from 'react-bootstrap';
import './css/ViewsBarCss.css';

export default function ViewsBar({handleSwitchProcessView1 ,handleSwitchProcessView2}) {

  return (
    <div>
        <Button variant="primary" className="buttonWider">Processlist</Button>
        <Button variant="primary" className='button' onClick={handleSwitchProcessView1}>Process View</Button>
        <Button variant="primary" className="button" onClick={handleSwitchProcessView2}>Process Timeline</Button>
    </div>
  )
}
