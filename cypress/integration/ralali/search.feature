@ralaliSearchTest
Feature: Ralali Website - Search

  I want to search a product on Ralali Website

  @positiveTesting
  Scenario: Search using valid keyword
    Given I go to ralali website page
    Then I search product using keyword "power bank"
    Then I see the search results with keyword "power bank"