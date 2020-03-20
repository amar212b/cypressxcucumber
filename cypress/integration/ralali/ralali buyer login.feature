@ralaliLoginTest
Feature: Ralali Website - Login

  I want to login on Ralali Website

  @negativeTesting
  Scenario: Login using wrong password
    Given I go to Ralali login page
    Then I fill in email field with "testerqe.ralali08@gmail.com"
    Then I fill in password field with "1234567890"
    Then I see the fail message "Email or password that you've entered is incorrect"

  @positiveTesting
  Scenario: Login using valid account
    Given I go to Ralali login page
    Then I go to login using buyer account