@saucedemo @login
Feature: Login Function
    The user will attempt to login with the credentials provided
    The user will be able to access the website for correct credentials
    THe user will receive error message for incorrect credentials 

    Background: The user is on the Login Page
        Given I navigate the login page
        Then I should be in the login page

    Scenario: The user is able to log in succesfully with valid credentials
        When I logged in with credentials, username "<username>" and password "<password>"
        Then I should be redirected to the inventory page
        And I should see the inventory list 

        Examples: 
            | username                  | password      |
            | standard_user             | secret_sauce  |
            | problem_user              | secret_sauce  |
            | performance_glitch_user   | secret_sauce  |
            | error_user                | secret_sauce  |
            | visual_user               | secret_sauce  |

    Scenario: The user receives error message for invalid inputs 
        When I logged in with credentials, username "<username>" and password "<password>"
        Then I should be in the login page
        And I should receive the error message "<errorMessage>"

        Examples: 
        | username          | password      | errorMessage                                          |    
        |                   |               | Epic sadface: Username and Password are required      |
        |                   | secret_sauce  | Epic sadface: Username is required                    |
        | standard_user     |               | Epic sadface: Password is required                    |
        | locked_out_user   | secret_sauce  | Epic sadface: Sorry, this user has been locked out.   |

    Scenario: The user receives error message for pressing back after logging out
        When I logged in with credentials, username "standard_user" and password "secret_sauce"
        Then I should see the inventory list 
        When I logged out 
        Then I should be in the login page
        When I hit the return page 
        Then I should receive the error message "Epic sadface: You can only access '/inventory.html' when you are logged in."