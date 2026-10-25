import {test, expect} from '@playwright/test';
import { mainPage } from '../utils/Pages/main';


test.describe('Login Page Tests', () => {
let main: mainPage;

test.beforeEach(async ({page}) =>{
    await page.goto('/');
    main = new mainPage(page);
});

test('should access the main page and the logo is displayed ', async ({}) => {
    await expect(main.CheapFlightLogo).toBeVisible();
});

test('should navigate to the profile icon to sign in ', async ({}) => {
    await main.profileIcon.click();
    await expect(main.welcomeText).toContainText('Welcome to Cheapflights.');
});

test('should navigate to the profile icon to sign in with google', async ({}) => {
    await main.profileIcon.click();
    await expect.soft(main.welcomeText).toContainText('Welcome to Cheapflights.');
    await main.googleButton.click();
    await expect(main.googleSignIn).toBeVisible();
});

test('should navigate to the profile icon to sign in with email', async ({}) => {
    await main.profileIcon.click();
    await expect.soft(main.welcomeText).toContainText('Welcome to Cheapflights.');
    await main.continueWithEmailBtn.click();
    await main.EnterEmailText.fill('');
    await main.signInEmail.click();
    await expect(main.errorMsg).toContainText('Please enter your email address.');
});

});
