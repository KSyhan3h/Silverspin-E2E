/// <reference types="cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const baseUrl = Cypress.config('baseUrl')+'/'

Given('I visit the page {string}', (webpage) => {
    let url = baseUrl+webpage
    if(webpage === 'homepage') url = baseUrl 
    cy.visit(url)
})
When('I scroll towards the bottom of the screen', () => {
    cy.scrollTo(0, 1900)
}) 
Then('I can see the description for the site features', (title, content) => {
    cy.fixture('newspaper_homepage_about').then((json) => {
        json = json.siteFeatures
        cy.get('.page_text__OI0np > h2').contains(json.title)
        cy.get('.page_text__OI0np > :nth-child(2)').contains(json.content[0])
        cy.get('.page_text__OI0np > :nth-child(3)').contains(json.content[1])
        cy.get('.page_img__dUeN7').should('have.attr', 'alt', json.image)
    })
})
Then('I can see the about content', () => {
    cy.fixture('newspaper_homepage_about').then((json) => {
        json = json.about
        cy.get('.page_about__NmV2T > h2').contains(json.title)
        cy.get('.page_about__NmV2T > p').contains(json.content)
    })
})