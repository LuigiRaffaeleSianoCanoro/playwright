# Playwright POC - E-commerce Testing

## Overview
This repository contains a Playwright Proof of Concept (POC) for automated testing of an e-commerce website: [Demo Web Shop](https://demowebshop.tricentis.com/). The purpose of this project is to demonstrate Playwright's capabilities for UI and end-to-end testing.

## Tech Stack
- [Playwright](https://playwright.dev/) for browser automation
- [Node.js](https://nodejs.org/) for runtime environment
- [Test Runner](https://playwright.dev/docs/test-runner) for test execution

## Test Scenarios
1. **User Authentication**
   - Login with valid credentials
   - Login with invalid credentials
   - Logout functionality

2. **Product Search & Filtering**
   - Search for a product
   - Apply category and price filters
   - Validate search results

3. **Shopping Cart & Checkout**
   - Add a product to the cart
   - Remove a product from the cart
   - Proceed to checkout
   - Fill out billing and shipping details

## Project Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (LTS version recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/LuigiRaffaeleSianoCanoro/playwright.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

### Execute all tests
```bash
npx playwright test
```

### Run tests in headed mode
```bash
npx playwright test --headed
```

## Reporting
Playwright generates test reports automatically. You can view them using:
```bash
npx playwright show-report
```
