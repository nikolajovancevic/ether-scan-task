
@regression
Feature: Sign up

  As I user
  I should be able to sign up
  So I get access to all features on the app

  Reqired fields are username, email, confirm email, password, confirm password, terms
  @wip
  Scenario: Register as a user
    Given I enter username
    And I enter email
    And I confirm email
    And I enter password
    And I confirm password
    And I check terms checkbox
    And I check newsletter checkbox
    # todo: because of CAPTCHA on PROD env, steps below are not defined; need test env
    When I click Create an Account button
    Then Verify Your Email text is visible
    And I navigate to mailinator
    And I click on confrimation link from inbox
    And Welcome to Etherscan! text is visible
    And I click on sign in button
    And I enter username
    And I enter pass
    And I click Login button
    And I should be on account overview page

  Scenario: Register as a user
    Given I click on Create an Account button
    Then Please enter Username. error is visible
    And Please enter a valid email address. error is visible
    And Please re-enter your email address. error is visible
    And Please enter Password. error is visible
    And Your password must be at least 8 characters long. error is visible
    And Please accept our Terms and Conditions. error is visible
