import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/')
    await page.getByRole('link', {name: 'log in'}).click()
    await page.getByRole('textbox', {name: 'Email'}).type('towime9934@intady.com')
    await page.getByRole('textbox', {name: 'Password'}).type('1q2w3e4r')
    await page.getByRole('button', {name: 'Log in'}).click()
    await expect(page.locator('div[class="header-links"] a[href="/customer/info"]')).toHaveText('towime9934@intady.com')
});

test('Login with invalid credentials', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/')
    await page.getByRole('link', {name: 'log in'}).click()
    await page.getByRole('textbox', {name: 'Email'}).type('towime9934@intady.com')
    await page.getByRole('textbox', {name: 'Password'}).type('wrongPassword')
    await page.getByRole('button', {name: 'Log in'}).click()
    await expect(page.locator('div.message-error span')).toHaveText('Login was unsuccessful. Please correct the errors and try again.')
});

