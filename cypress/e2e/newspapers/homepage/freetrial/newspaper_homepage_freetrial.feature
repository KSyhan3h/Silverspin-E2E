@homepage
Feature: Try 7 Days Free Trial in Homepage

    Background: The user is on the homepage
        Given I visit the page "homepage"

    Scenario: The user clicks on the Try 7 Days Free 
        Given I am not logged in 
        When I click on the 7 days free button 
        Then I am asked to signup or signin 