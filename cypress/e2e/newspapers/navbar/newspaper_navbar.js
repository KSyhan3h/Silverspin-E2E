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
    cy.url().should('include', url)
})
When('I click the logo', () => {
    cy.get('.ScreenLogo').click()
})
When('I click the {string} menu', (menu) => {
    cy.get('.HeaderContainer').contains(menu).click()
})
When('I click the Sign In menu', () => {
    cy.get('.MemberNavigation_HeaderButtonLink__L6X_g').click()
})