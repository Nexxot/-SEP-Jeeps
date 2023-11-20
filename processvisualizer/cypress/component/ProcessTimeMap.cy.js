import React from 'react'
import ProcessTimeMap from '../../src/procesmap/ProcessTimeMap'

describe('<ProcessTimeMap />', () => {

  beforeEach(() => {
    // Set the viewport to 1080p (1920x1080) before each test
    cy.viewport(1920, 1080);
  });
  
  it('renders and switching between month and year view', () => {
    cy.mount(<ProcessTimeMap />)
    cy.contains('button', /month/i).filter(':visible').should('exist');
    cy.contains(/january/i).should('exist');
    
    cy.contains('button', /year/i).filter(':visible').should('exist').click();
    cy.contains(/2024/i).should('exist');
    cy.contains(/january/i).should('not.exist');
    //TODO need a way to get props inside the TimeMap to check the metadata popup
    cy.get('[timeline-metadata-test-id]').should('not.exist');
  })

  it('renders some mock processes', () => {
    cy.mount(<ProcessTimeMap />)
    //TODO how get I the processes in the gant?
 
  })
})