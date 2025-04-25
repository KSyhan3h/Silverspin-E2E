Feature: Search Page - Recent Searches

    Background: The user is on the Search Page 
        Given I visit the page "search"
        And I type the following value "baseball" on "keyword" field
        And I press enter key on "keyword" inputfield
        When I visit the page "search"
        And I type the following value "USA" on "keyword" field
        And I press enter key on "keyword" inputfield
        When I visit the page "search"

    Scenario: The user is able to view and visit recent searches
        Then I can view recent keyword searches "USA|baseball"
        When I click on a recent search
        Then I got result for a recent search
        When I visit the page "search"

    Scenario: The user is able to clear out recent searches
        When I type the following value "hockey" on "keyword" field
        And I press enter key on "keyword" inputfield
        When I visit the page "search"
        When I type the following value "Canada" on "keyword" field
        And I press enter key on "keyword" inputfield
        When I visit the page "search"
        And I remove one of the options
        Then I see remaining options "3" 
        And I clear all options 
        Then I can view recent keyword searches ""

    # Scenario: The user sees recent searches if there's a keyword added to input
    #     When I type the following value "<keyword>" on "keyword" field
    #     And I type the following value "<date>" on "date" field 
    #     And I type the following value "<location>" on "location" field 
    #     And I press enter key on "keyword" inputfield
    #     When I visit the page "search"
    #     Then I can view recent keyword searches "<keyword>|<date>|<location>"

    #     Examples: 
    #         | keyword   | date      | location  |
    #         | GOLF      |           | Texas     |
    #         | GOLF      | Mar 2025  |           |
    #         |           | Mar 2025  | Texas     |
