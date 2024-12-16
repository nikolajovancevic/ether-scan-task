# Ether scan registration form

## Table of Contents

- [The Task](#the-task)
- [Description](#description)
- [Automation](#automation)

## The task
- Create test scenarios for the registration form on [Etherscan website](https://etherscan.io/register)
- Explain what type of tools you would use to enable an automatic testing system for the task above and how they would be utilized
- Create e2e browser tests that will cover all test scenarios

## Description

Test scenarios are located in `src/features/sign_up` folder.

**CAPTCHA** is being ignored in test scenarios. 

### Current test coverage 
- Sign up form `happy path` flow 
- Negative test scenarios for fields: Username, Email Address, Confirm Email Address, Password, Confirm Password  

In `sign_up.feature` there is an example of `e2e` test, which is step-by-step flow of the actual sign up flow for a new user.

Since given env is PROD, actual sign up is not possible to automate completely (due to CAPTCHA), so I've defined the steps after submitting the sign up form to only log the particular step.    

## Automation

Repository contains automation framework for automating test scenarios. I've used [Playwright](https://playwright.dev/) with [Cucumber](https://cucumber.io/). Reason, Gherkin syntax is easy to read, applications desired behavior can be described in plain text, meaning it will be readable to technical and non-technical stuff. Also, it provides good project documentation overall.

### Prerequisites

- [Node](https://nodejs.org/en/download/package-manager)
- [Playwright](https://playwright.dev/docs/intro)
- [Cucumber JS](https://github.com/cucumber/cucumber-js)

### Executing tests

Hooks are defined in `utils/hooks.ts` file, at the start of every test browser is being initiated and new tab is opened that will navigate to the `baseURL` - in this case `https://etherscan.io/register`.

By default, tests will run in `HEADFULL` mode. To run in `HEADLESS` mode, navigate to `utils/hooks.ts` file and change `headless` variable to `true`:
```
headless: true
```

To execute all tests, run:

```
npm run regression
```
#### Other scripts
To execute `work-in-progress` test, firstly add `@wip` above the desired test scenario and run:

```
npm run wip
```
To execute `dry-run`, run
```
npm run dry-run
```
To view the steps usage, run:
```
npm run features:usage
```
To view undefined steps, run:
```
npm run features:undefined
```

#### Possible Improvements
- Refactor steps in `.feature` files to pass the variables dynamically so there is no need for defining separete step for each case 
- Creating Page Object Model with classes each page, e.g. SignUp page, SignIn page, Mailinator page 
- Define selectors and methods within classes, moving part of the logic from the steps. Leading to cleaner step files.
- Add possibility to dynamicaly choose test execution mode `headless` or `headfull`  
- Create basic workflow for executing tests on GitHub via GitActions;  
- Add better reporter
