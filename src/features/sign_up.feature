
@regression @wip
Feature: Sign up

  As I user
  I should be able to sign up
  So I get access to all features on the app

  Reqired fields are username, email, confirm email, password, confirm password, terms

  Scenario: Register as a user
    Given I enter username
    And I enter email
    And I confirm email
    And I enter password
    And I confirm password
    And I check terms checkbox
    And I check newsletter checkbox
# todo: uncomment once we have test env
# When I click Create an Account button
# Then Verify Your Email is visible
# And I navigate to mailinator
# And I click on confrimation link
# And Welcome to Etherscan! is visible
# And I sign in
# And I enter username / pass click login
# And I should be on account overview page
