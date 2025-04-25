/// <reference types="cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const baseUrl = Cypress.config('baseUrl')+'/'

Given('I visit the page {string}', (webpage) => {
    let url = baseUrl+webpage
    if(webpage === 'homepage') url = baseUrl 
    cy.visit(url)
})

When('I type the following value {string} on {string} field', (value, inputfield) => {
    if(value === "") return 
    cy.newspapers_searchbox_inputfield(inputfield).then((element) => {
        cy.get(element).type(value)        
    }) 
})
When('I press enter key on {string} inputfield', (inputfield) => {
    cy.newspapers_searchbox_inputfield(inputfield).then((element) => {
        cy.get(element).type('{enter}')        
    }) 
})
When('I submit the form', () => {
    cy.get('form#search').submit()
})
When('I clicked the search button', () => {
    cy.get('[data-cy="searchButton"]').click()
})
When('I click an {string} inputfield', (inputfield) => {
    cy.newspapers_searchbox_inputfield(inputfield).then((element) => {
        cy.get(element).click()        
    }) 
})
When('I wait for location dropdown option to appear', () => {
    cy.get('.Dropdown_focused___crzr > .Dropdown_label__hiGl_').should('be.visible')
    cy.newspapers_searchbox_inputfield('location')
        .then((element) => {
            cy.get(element).type('{enter}', { force:true })        
        }) 
})
Then('I am redirected to the results page and url contains {string}', (urlString) => {
    urlString = urlString.replace(/ /g, "+")
    cy.url()
        .should('include', '/results/', { timeout: 10000 })
        .and('include', urlString)
    cy.url().should('not.include', 'search', { timeout: 10000 })
})
Then('I can view recent keyword searches {string}', (keywords) => {
    cy.get('.KeywordInput_Dropdown__ZfO4r > .Card_Card__geaBS').should('be.visible')
    
    let keywordArray = keywords.split('|')
    cy.get('.RecentSearches_RecentSearches__mgSR2')
        .children()
        .then(($children) => {
            const hasMatch = [...$children].some(($child) =>
                                    keywordArray.some(keyword => 
                                        $child.innerText.includes(keyword)))
            expect(hasMatch).to.be.true
        })
})
When('I click the {string} widget', (inputfield) => {
    if(inputfield === 'date') 
        cy.get('[data-cy="dateInput"] > .Dropdown_Toggle__w9_5v > button').click()
    else if(inputfield === 'location')
        cy.get('[data-cy="locationInput"] > .Dropdown_Toggle__w9_5v > button').click()
    else throw new Error('no inputfield provided')
})
Then('I can view the widget', () => {
    cy.get('.Dropdown_FocusContainer__tMJFn > .Card_Card__geaBS').should('be.visible')
})