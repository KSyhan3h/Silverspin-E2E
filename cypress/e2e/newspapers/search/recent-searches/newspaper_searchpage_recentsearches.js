/// <reference types="cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const baseUrl = Cypress.config('baseUrl')+'/'

Given('I visit the page {string}', (webpage) => {
    let url = baseUrl+webpage
    if(webpage === 'homepage') url = baseUrl 
    cy.visit(url)
})
Then('I can see the Research Searches section', () => {
    cy.get('.BlankState_body__2Fz3t > :nth-child(1)').should('be.visible')
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
Then('I can view recent keyword searches {string}', (keywords) => {
    console.log('passed value ' + keywords)
    if(keywords === '') {
        cy.get('.BlankState_noRecentSearches__X7A3G').should('be.visible')
    } else {
        cy.get('.RecentSearches_RecentSearches__mgSR2')
        .find('a')
        .find('span')
        .each(($span) => {
            cy.wrap($span).invoke('text').then((text) => {
                const matches = keywords.includes(text)
                console.log('searches text ' + text + ' keywords ' + keywords)
                expect(matches).to.be.true
            })
        })
    }
})
When('I click on a recent search', () => {
    cy.get('.RecentSearches_RecentSearches__mgSR2')
        .find('a') 
        .then(($href) => {
            cy.wrap($href[0]).invoke('text').then((text) => {
                this.storedText = text
            })
            cy.wrap($href[0]).click()
        })
})
Then('I got result for a recent search', () => {
    cy.url({ timeout: 10000 }).should('include', this.storedText)
})
When('I remove one of the options', () => {
    cy.get('.RecentSearches_RecentSearches__mgSR2')
        .find('button') 
        .then(($buttons) => {
            cy.wrap($buttons[0]).click()
        })
})
When('I clear all options', () => {
    cy.get('.Card_Header__4bRF_ > .TextButton')
        .should('be.visible')
        .click({force:true})   
})
Then('I see remaining options {string}', (number) => {
    number = Number(number)
    cy.get('.RecentSearches_RecentSearches__mgSR2')
        .children()
        .should('have.length', number)
})