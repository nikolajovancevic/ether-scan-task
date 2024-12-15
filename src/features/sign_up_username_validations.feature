
@regression
Feature: Sign up username field validations

  As I user
  I should not be able to enter any data to username field
  Because username field has validations

  Username has to be from 5 to 30 chars, only alphanumeric

  Scenario: Check error for entering char number below limit will
    Given I enter "4" chars
    Then Please enter at least 5 characters. error is visible

  Scenario: User is unable to enter more than 30 chars
    Given I enter "35" chars
    Then I see only first 30 chars in the username field

  Scenario: Check error for using special char
    Given I enter any special char returns error

  Scenario: Leaving username empty returns error
    Given I enter "validUsername" chars 
    When I clear input
    Then I see an error