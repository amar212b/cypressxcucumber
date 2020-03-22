@ralaliRegisterTest
Feature: Ralali Website - Register

  I want to register on Ralali Website

  @negativeTesting
  Scenario: As a User, I should not be able to successfully register using invalid email
    Given I go to register page on ralali website
    Then I fill in fullname field with "sinta"
    Then I fill in email field with "sinta.com"
    When I click button next
    Then I see the fail message "Your email address / phone number is not valid"

  @negativeTesting
  Scenario: As a User, I should not be able to successfully register using empty field
    Given I go to register page on ralali website
    Then I fill in fullname field with " "
    Then I fill in email field with " "
    Then I can't click the button next