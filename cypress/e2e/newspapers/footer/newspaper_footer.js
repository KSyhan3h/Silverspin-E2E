/// <reference types="cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const baseUrl = Cypress.config('baseUrl')+'/'

Given('I visit the page {string}', (webpage) => {
    let url = baseUrl+webpage
    if(webpage === 'homepage') url = baseUrl 
    cy.visit(url)
})

Then('I visited the correct page {string}', (webpage) => {
    let url = webpage
    if(webpage === 'homepage') url = baseUrl
    else if(webpage === 'twitter') url = 'x.com'
    cy.url().should('contains', url, { timeout: 10000 })
})

When('I scroll to the bottom of the screen', () => {
    cy.scrollTo('bottom')
})
When('I can see the footer container', () => {
    cy.get('.FooterContainer').should('be.visible')
})
When('I click on the {string} link', (footerLink) => {
    cy.get('.FooterContainer')
        .contains(footerLink)
        .click()
})
When('I click on the social media link {string}', (socialMedia) => {
    let element = 'a[href*="***"]'.replace('***', socialMedia)
    cy.get('.socialBox > .footerRow')
        .find(element)
        .should('exist')
        .click()
})
When('I terms link exist and can be clicked {string}', (hrefLink) => {
    let element = '[href="https://***"] > u'.replace('***', hrefLink)
    cy.get(element)
        .parent()
        .invoke('removeAttr', 'target')
        .click()
})
Then('I see the disclaimer is visible', () => {
    cy.get('.muted').should('be.visible')
})
When('I click on the language option', () => {
    cy.get('#react-aria-\\:R5qkjrmjsvfa\\:')
        .should('be.visible')
        .click()
})
Then('I should see a dropdown with different options', () => {
    cy.get('#langregionBtn').should('be.visible')
})
When('I click on the {string} language option', (language) => {
    cy.get('#langregionBtn')
        .should('be.visible')
        .contains(language)
        .click()
})
Then('I should see that the language change has been applied {string} {string}', (language, locale) => {
    cy.get('#react-aria-\\:R5qkjrmjsvfa\\:').should('contain', language)
    cy.get('html')
        .should('have.attr', 'lang', locale)
})