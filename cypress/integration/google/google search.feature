@googleSearchTest
Feature: Google - Search

  I want to search on Google

  @positiveTesting
  Scenario: As a User, I should be able to successfully search on google page
    Given I go to google page
    Then I fill in search field with "damar mustiko aji"
    Then I see the results "damar"