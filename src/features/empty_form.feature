
@regression
Feature: Sign up form

  As I user
  I should not be able to sign up without providing required data
  Becuse sign up form has required fields

  Scenario: Register as a user
    Given I click on Create an Account button
    Then Please enter Username. error is visible
    And Please enter a valid email address. error is visible
    And Please re-enter your email address. error is visible
    And Please enter Password. error is visible
    And Your password must be at least 8 characters long. error is visible
    And Please accept our Terms and Conditions. error is visible
