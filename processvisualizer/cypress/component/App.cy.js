import React from 'react'
import App from '../../src/App'

describe('<App />', () => {


  beforeEach(() => {
    // Set the viewport to 1080p (1920x1080) before each test
    cy.viewport(1920, 1080);
  });

  it('navbar elements', () => {
    cy.mount(<App />) 

    cy.get('.modal-header').should('not.exist');
    cy.contains("UPDATE VIEW").should('exist').click();
    cy.get('.modal-header').should('exist');
    cy.contains("EXPORT").should('exist');
    cy.get('#userIconNavBar').should('exist');
    cy.get('.navbar-brand > .d-inline-block').should('exist');
  })

  it('viewbar elements', () => {
    cy.mount(<App />) 
    cy.contains('button', /processlist/i).filter(':visible').should('exist');
    cy.contains('button', /process view/i).filter(':visible').should('exist');
    cy.contains('button', /process timeline/i).filter(':visible').should('exist');
  })

  it('Update view', () => {
    cy.mount(<App />)

    cy.get('.modal-header').should('not.exist');
    cy.contains("UPDATE VIEW").should('exist').click();
    cy.get('.modal-header').should('exist');
    cy.get('.modal-footer > .btn-primary').should('exist')
    cy.get('.modal-footer > .btn-secondary').should('exist')
  })

  it('main componenst without metadata', () => {
    cy.mount(<App />)

    cy.contains("UPDATE VIEW").should('exist');
    cy.contains("EXPORT").should('exist');
    cy.contains('button', /processlist/i).filter(':visible').should('exist');
    cy.contains('button', /process view/i).filter(':visible').should('exist');
    cy.contains('button', /process timeline/i).filter(':visible').should('exist');
 
    cy.get('[data-testid=process-view-id]').should('exist');
    cy.get('[data-testid=process-timeline-id]').should('not.exist');

    cy.contains('button', /process timeline/i).filter(':visible').click();
    cy.get('[data-testid=process-timeline-id]').should('exist');
    cy.get('[data-testid=process-view-id]').should('not.exist');

    cy.contains('button', /process view/i).filter(':visible').click();
    cy.get('[data-testid=process-view-id]').should('exist');
  })

  it('Account dropdown menu', () => {
    cy.mount(<App />)

    cy.get('#userIconNavBar').filter(':visible').should('exist').click();
    cy.get('[href="Name"]').filter(':visible').should('exist');
    cy.get('[href="Role"]').filter(':visible').should('exist');
    cy.get('[role="button"]').filter(':visible').should('exist');
    cy.get('[href="Logout"]').filter(':visible').should('exist');
  })

  it('User manager - button "Add User Button" disabled when not all input fields filled ', () => {
    cy.mount(<App />)
    cy.get('#userIconNavBar').click();
    cy.get('[role="button"]').click();
    cy.get('.container > .btn').filter(':visible').should('be.disabled');

  })

  it('User manager - add new user Max Mustermann + John Doe', () => {
    cy.mount(<App />);
    //Add Mustermann
    cy.get('#userIconNavBar').click();
    cy.get('[role="button"]').click();
    cy.get('.mainGridDivUserManagement').filter(':visible').should('exist');
    cy.get('#name').filter(':visible').should('exist').type('Max Mustermann');
    cy.get('#username').filter(':visible').should('exist').type('MMustermann');
    cy.get('#password').filter(':visible').should('exist').type('Password1');
    //TODO role input shouldn't be text
    // cy.get('#role')
    cy.get('#date').filter(':visible').should('exist').type('2024-01-01');
    cy.get('.container > .btn').filter(':visible').should('exist').click();

    //Add Doe
    cy.get('#userIconNavBar').click();
    cy.get('[role="button"]').click();
    cy.get('.mainGridDivUserManagement').filter(':visible').should('exist');
    cy.get('#name').filter(':visible').should('exist').type('John Doe');
    cy.get('#username').filter(':visible').should('exist').type('JDoe');
    cy.get('#password').filter(':visible').should('exist').type('Password2!');
    //TODO role input shouldn't be text
    // cy.get('#role')
    cy.get('#date').filter(':visible').should('exist').type('2024-01-13');
    cy.get('.container > .btn').filter(':visible').should('exist').click();

    //Check for user MMustermann
    cy.get('tbody tr').eq(-2).find('td').eq(0).should('have.text', 'Max Mustermann');
    cy.get('tbody tr').eq(-2).find('td').eq(1).should('have.text', 'MMustermann');
    cy.get('tbody tr').eq(-2).find('td').eq(2).should('have.text', 'Password1');
    //TODO Role
    cy.get('tbody tr').eq(-2).find('td').eq(4).should('have.text', '2024-01-01');

    //Check for user JDoe
    cy.get('tbody tr').last().find('td').eq(0).should('have.text', 'John Doe');
    cy.get('tbody tr').last().find('td').eq(1).should('have.text', 'JDoe');
    cy.get('tbody tr').last().find('td').eq(2).should('have.text', 'Password2!');
    //TODO Role
    cy.get('tbody tr').last().find('td').eq(4).should('have.text', '2024-01-13');
  });
  
  //TODO change the state of app to meta data enabled
    //only for the process view (maybe)
})

