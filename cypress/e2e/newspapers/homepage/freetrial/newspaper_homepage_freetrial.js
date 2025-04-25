/// <reference types="cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const baseUrl = Cypress.config('baseUrl')+'/'

Given('I visit the page {string}', (webpage) => {
    let url = baseUrl+webpage
    if(webpage === 'homepage') url = baseUrl 
    cy.visit(url)
})
When('I am not logged in', () => {
    cy.get('.MemberNavigation_HeaderButtonLink__L6X_g')
        .should('have.attr', 'href')
        .and('include', 'signin')
})
When('I click on the 7 days free button', () => {
    cy.get('.page_mainCTA__o_2jQ > .Pill').click()
})
Then('I am asked to signup or signin', () => {
    cy.url().should('include', 'register')
})