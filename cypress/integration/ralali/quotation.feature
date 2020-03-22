@ralaliQuotationTest
Feature: Ralali Website - Request Quotation

  I want to request quotation on Ralali Website

  @positiveTesting
  Scenario: Request using valid data
    Given I go to ralali website page
    Then I click the button request quotation
    Then I fill in name field with "Sinta"
    Then I fill in email field with "sinta@mail.com"
    Then I choose country code with "+66"
    Then I fill in phone field with "8577123456"
    Then I click the button next