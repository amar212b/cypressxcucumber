@backofficeLoginTest @skip
Feature: Fintech Backoffice - Login

  I want to login on fintech backoffice

  @positiveTesting
  Scenario: Login using valid account
    Given I go to page backoffice login
    Then I see "Login | Fintech Backoffice" in the title
    Then I login using admin account
    Then I click button logout

  @negativeTesting
  Scenario: Login using invalid account
    Given I go to page backoffice login
    Then I see "Login | Fintech Backoffice" in the title
    Then I fill in email field using "xxx@ralali.com"
    Then I fill in password field using "123456"
    When I click button login
    Then I see the error message "User not found"

  @negativeTesting
  Scenario: Login using wrong password
    Given I go to page backoffice login
    Then I see "Login | Fintech Backoffice" in the title
    Then I fill in email field using "damar.aji@ralali.com"
    Then I fill in password field using "123456xyz"
    When I click button login
    Then I see the error message "User not found"