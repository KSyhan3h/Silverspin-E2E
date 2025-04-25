@homepage
Feature: Homepage Search 
    The user is able to input information to search what they want  
    The user receives results based on what they entered 
    The user is able to access the search widgets 
    
    Background: The user is on the homepage
        Given I visit the page "homepage"

    Scenario: The user enters keyword and hitting enter key
        When I type the following value "<keyword>" on "keyword" field
        And I press enter key on "keyword" inputfield
        Then I am redirected to the results page and url contains "keyword=<keyword>"

        Examples:
            | keyword       |
            | something     |
            | March 2025    |
            | United States |
            | Mexico        |

    Scenario: The user keyword and clicking search button
        When I type the following value "<keyword>" on "keyword" field
        And I clicked the search button
        Then I am redirected to the results page and url contains "keyword=<keyword>"

        Examples:
            | keyword       |
            | something     |
            | March 2025    |
            | United States |
            | Mexico        |

    Scenario: The user date and hitting enter key
        When I type the following value "<date>" on "date" field
        And I press enter key on "date" inputfield
        Then I am redirected to the results page and url contains "<url>"

        Examples:
            | date                  | url                                       |
            | March 20              | date=03-20                                |
            | March 2025            | date=2025-03                              |
            | Apr 1990 to Apr 2025  | date-end=2025-04-30&date-start=1990-04-01 |
            | Dec 30 2021           | date=2021-12-30                           | 

    Scenario: The user date and clicking search button
        When I type the following value "<date>" on "date" field
        And I clicked the search button
        Then I am redirected to the results page and url contains "<url>"

        Examples:
            | date                  | url                                       |
            | March 20              | date=03-20                                |
            | March 2025            | date=2025-03                              |
            | Apr 1990 to Apr 2025  | date-end=2025-04-30&date-start=1990-04-01 |
            | Dec 30 2021           | date=2021-12-30                           | 

    Scenario: The user location and hitting enter key
        When I type the following value "<location>" on "location" field
        And I wait for location dropdown option to appear 
        And I submit the form
        Then I am redirected to the results page and url contains "<url>"

        Examples:
            | location      | url                                       |
            | United States | country=us                                |
            | Canada        | country=ca                                |
            | california    | region=us-ca                              |
            | mexico        | city=Mexico&county=Audrain&region=us-mo   |
            | puerto rico   | region=us-pr                              |

    Scenario: The user location and clicking search button
        When I type the following value "<location>" on "location" field
        And I wait for location dropdown option to appear
        And I clicked the search button
        Then I am redirected to the results page and url contains "<url>"

        Examples:
            | location      | url                                       |
            | United States | country=us                                |
            | Canada        | country=ca                                |
            | california    | region=us-ca                              |
            | mexico        | city=Mexico&county=Audrain&region=us-mo   |
            | puerto rico   | region=us-pr                              |
    
    Scenario: The user is able to view recent keyword searches made
        When I type the following value "<keyword1>" on "keyword" field
        And I press enter key on "keyword" inputfield
        When I visit the page "homepage"
        When I type the following value "<keyword2>" on "keyword" field
        And I press enter key on "keyword" inputfield
        When I visit the page "homepage"
        And I click an "keyword" inputfield
        Then I can view recent keyword searches "<keyword1>|<keyword2>"

        Examples: 
            | keyword1  | keyword2  |
            | baseball  | USA       |
            | hockey    | Canada    |    

    Scenario: The user is able to view the date widget 
        When I click the "date" widget 
        Then I can view the widget 

    Scenario: The user is able to view the location widget 
        When I click the "location" widget 
        Then I can view the widget 
        


    