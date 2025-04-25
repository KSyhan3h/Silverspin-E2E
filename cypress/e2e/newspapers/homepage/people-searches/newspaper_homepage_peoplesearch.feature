@homepage
Feature: Common searches by other users in the Homepage
    The user is able to check the different searches of other users
    The user is able to access results for other people's searches

    Background: The user is on the homepage
        Given I visit the page "homepage"

    Scenario: The user can see different searches other users make 
        When I scroll down to the searches people make
        Then The searches people make should be visible 
        And There are multiple searches
        And The searches change after over time 

    Scenario: The user can see and check searches 
        When I scroll down to the searches people make
        And I click one of the searches people make 
        Then I get results related to the search clicked 

