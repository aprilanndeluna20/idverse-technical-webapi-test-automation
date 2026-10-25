import {test, expect} from '@playwright/test';


test.describe('Login Page Tests', () => {

test.beforeEach(async ({page}) =>{
    await page.goto('/');
});

});
