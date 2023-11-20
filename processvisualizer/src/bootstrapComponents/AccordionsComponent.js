import React from 'react'
import ProcessAccordion from './ProcessAccordion';
export default function AccordionsComponent() {
  return (
    <div data-testid="accordion-test-id">
      <div>
        <ProcessAccordion data={{title: "O2C", inside: ['P2D','D2R'],color: 'blue'}}/>
        <ProcessAccordion data={{title: "P2D", inside: ['D2R'],color: 'red'}} />
        <ProcessAccordion data={{title: "D2R", inside: ['P2D'],color: 'purple'}} />
      </div>
    </div>
  )
}
