@homepage
Feature: About Section in Homepage

    Background: The user is on the homepage
        Given I visit the page "homepage"
    
    Scenario: The user can see brief description of the site features 
        When I scroll towards the bottom of the screen
        Then I can see the description for the site features
        
    Scenario: The user can see the about text 
        When I scroll towards the bottom of the screen 
        Then I can see the about content 