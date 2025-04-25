Feature: Navigation Bar
    Check if user is redirected to correct page after clicking an element in Navigation Bar

    Background: The user is at the Newspapers homepage 
        Given I visit the page "homepage"
            
    Scenario: The user clicks the Newspapers logo and is redirected to the homepage
        When I click the logo 
        Then I visited the correct page "homepage"

    Scenario: The user clicks the Search menu 
        When I click the "Search" menu 
        Then I visited the correct page "search"

    Scenario: The user clicks the Papers menu 
        When I click the "Papers" menu 
        Then I visited the correct page "papers"

    Scenario: The user clicks the Clippings menu 
        When I click the "Clippings" menu 
        Then I visited the correct page "clippings"

    Scenario: The user clicks the Free Trial menu 
        When I click the "Free Trial" menu 
        Then I visited the correct page "free-trial"

    Scenario: The user clicks the Sign In menu 
        When I click the Sign In menu 
        Then I visited the correct page "signin"

    Scenario: The user clicks the Topics menu 
        When I click the "Topics" menu 
        Then I visited the correct page "topics"