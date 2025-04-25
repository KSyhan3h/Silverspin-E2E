Feature: Footer
    The user is correctly directed to correct pages or directories when clicking links
    The user is able to visibly see the Legal dislaimers and links 
    The user is able to visit social media pages 
    The user has options to change language 
    The user can visit other websites

    Background: The user is on the homepage
        Given I visit the page "homepage"

    Scenario: The user can see the footer and different links
        When I scroll to the bottom of the screen
        Then I can see the footer container 

    Scenario: The user can access the different footer links 
        When I scroll to the bottom of the screen
        And I click on the "<footerLink>" link 
        Then I visited the correct page "<url>"

        Examples: 
            | footerLink                | url                   | 
            | Subscribe                 | plans                 | 
            | Gift Subscriptions        | gift                  | 
            | Help                      | help                  |
            | Site Map                  | sitemap               | 
            | About                     | about                 | 
            | Fish Wrap—Official Blog   | blog.newspapers.com   |
            | Affiliates                | affiliates            | 
            | Content Providers         | content               |

    Scenario: The user can visit the social media sites 
        When I scroll to the bottom of the screen 
        And I click on the social media link "<socialMedia>"
        Then I visited the correct page "<socialMedia>"

        Examples:
            | socialMedia   | 
            | facebook      | 
            | twitter       | 
            | instagram     | 

    Scenario: The user is able to view the terms and access the links 
        When I scroll to the bottom of the screen 
        Then I terms link exist and can be clicked "<hrefLink>"
        Then I visited the correct page "<url>"

        Examples: 
            | hrefLink                                                              | url                                           |
            | www.ancestry.com                                                      | www.ancestry.com                              |
            | www.ancestry.com/cs/legal/termsandconditions                          | /legal/termsandconditions                     |
            | www.ancestry.com/cs/legal/privacystatement                            | /legal/privacystatement                       |
            | www.ancestry.com/cs/legal/privacystatement#personal-info-categories   | /privacystatement#personal-info-categories    |
    
    Scenario: The user can see the disclaimer at the bottom of the screen
        When I scroll to the bottom of the screen 
        Then I see the disclaimer is visible 

    Scenario: The user can change the language of the website 
        When I scroll to the bottom of the screen 
        And I click on the language option 
        Then I should see a dropdown with different options 
        When I click on the "<language>" language option 
        Then I should see that the language change has been applied "<language>" "<locale>"

        Examples: 
            | language                  | locale    |
            | Canada (English)          | en-CA     |
            | Canada (Français)         | fr-CA     |
            | UK (English)              | en-GB     |
            | Australia (English)       | en-AU     |
            | New Zealand (English)     | en-NZ     |
            | United States (English)   | en-US     |

    Scenario: The language change persists on other pages 
        When I scroll to the bottom of the screen 
        And I click on the language option 
        Then I should see a dropdown with different options 
        When I click on the "Canada (Français)" language option 
        And I click on the "M’abonner" link
        Then I should see that the language change has been applied "Canada (Français)" "fr-CA"
