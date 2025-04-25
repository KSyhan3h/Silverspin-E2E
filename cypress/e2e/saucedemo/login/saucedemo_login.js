import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I navigate the login page', () => {
   cy.visit('https://www.saucedemo.com/')
})
Then('I should be in the login page', () => {
   cy.url().should('eq', 'https://www.saucedemo.com/')
})

When('I logged in with credentials, username {string} and password {string}', (username, password) => {
   if(username) cy.get('#user-name').type(username)
   if(password) cy.get('#password').type(password)
   cy.get('#login-button').click()
})
Then('I should be redirected to the inventory page', () => {
   cy.url().should('contain', '/inventory.html')
})
Then('I should see the inventory list', () => {
   cy.get('[data-test="inventory-container"]').should('be.visible')
})
Then('I should receive the error message {string}', (errorMsg) => {
   cy.contains(errorMsg).should('be.visible')
})
When('I logged out', () => {
   cy.get('#react-burger-menu-btn').click()
   cy.get('[data-test="logout-sidebar-link"]').click()
})
When('I hit the return page', () => {
   cy.go('back')
})
