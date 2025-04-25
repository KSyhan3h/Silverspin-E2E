/// <reference types="cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const baseUrl = Cypress.config('baseUrl')+'/'

Given('I visit the page {string}', (webpage) => {
    let url = baseUrl+webpage
    if(webpage === 'homepage') url = baseUrl 
    cy.visit(url)
})

When('I scroll down to the searches people make', () => {
    cy.scrollTo(0, 200)
})
Then('The searches people make should be visible', () => {
    cy.get('.page_top__DbE9O').should('be.visible')  
})
Then('There are multiple searches', () => {
    cy.get('.ExampleSearchesList_Searches__jLnut').as('searchList')

    cy.get('@searchList')
        .children(':visible')
        .its('length')
        .should('be.greaterThan', 1)
})
Then('The searches change after over time', () => {
    cy.get('.ExampleSearchesList_Searches__jLnut').as('searchList')
    
    let initialTexts = []
    cy.get('@searchList') 
        .children()
        .each(($child) => {
            initialTexts.push($child.text().trim());
        })
        .then(() => {
            cy.log('Initial Texts:', initialTexts)
        })
    
    cy.wait(8000)

    let updatedTexts = []
    cy.get('@searchList')
        .children()
        .each(($child) => {
            updatedTexts.push($child.text().trim());
        })
        .then(() => {
            cy.log('Updated Texts:', updatedTexts)
            expect(updatedTexts).to.not.deep.equal(initialTexts)
        })
})

let selectedSearch 
When('I click one of the searches people make', () => {
    cy.get('.ExampleSearchesList_Searches__jLnut') 
        .children(':visible')
        .eq(0)
        .as('search')
        
    cy.get('@search')
        .invoke('text')
        .then((text) => {
            console.log('consoleLog: ' + text)
            selectedSearch = text
        })

    cy.get('@search').click()
})
Then('I get results related to the search clicked', () => {
    console.log('consoleLog: ' + selectedSearch)
    let keyword = selectedSearch.split(' · ')
                    .shift()
                    .replace(/ /g, "+")
    console.log('consoleLog: Keyword = '+keyword)
    cy.url()
        .should('contains', 'results')
        .and('contains', keyword)
})