# Playwright qa Automation Project

* Project Description
This project is an automated testing framework built using:
- Playwright
- TypeScript
- Page Object Model (POM)

* The Project are implemented in the website:
https://practicesoftwaretesting.com

-----------------------------------------------------------------

## Features Covered

* Authentication
- Register with valid data
- Login with invalid data

* Cart
- Add product to cart
- Remove product from cart

* Sorting
- Sort products by Name A-Z
- Sort products by Price High to Low

-----------------------------------------------------------------

## Project Structure use

pages/
tests/
playwright.config.ts
.env
README.md

-------------------------------------------------------------------

## Browsers Tested
* Chromium
* Firefox

-----------------------------------------------------------------

## Run Tests
* npx playwright test ( run all testes )
* npx playwright test --headed ( run all tests in headed mode )
* npx playwright test --project=chromium
* npx playwright test --project=firefox