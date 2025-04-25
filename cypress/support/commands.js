// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('newspapers_searchbox_inputfield', (inputfield) => {
    let element = ''
    
    if (inputfield === 'keyword') element = '[data-cy="keyword-input"]'
    else if (inputfield === 'date') element = '[data-cy="date-input"]'
    else if (inputfield === 'location') element = '#location-display'
    else throw new Error('No inputfield value entered')

    return element
})