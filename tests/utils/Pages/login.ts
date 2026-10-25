import { AndroidKey, Locator, Page,  } from "@playwright/test";

class LoginPage{

private CheapFlightLogo: any;


    constructor(private page: Page){
     this.page.goto('https://www.cheapflights.com.au/');
     this.CheapFlightLogo = this.page.getByRole('link', { name: 'Go to the cheapflights' });
     this.page.getByRole('button', { name: 'Sign in' });
     this.page.locator('div').filter({ hasText: 'Welcome to Cheapflights.Let\'s' }).nth(4);
     this.page.getByText('Sign in or create an account');
     this.page.getByRole('button', { name: 'Google' });
     this.page.getByRole('button', { name: 'Continue with email' });
     this.page.getByText('BackWhat\'s your email address');
     this.page.getByRole('textbox', { name: 'Enter email' });
     this.page.getByRole('button', { name: 'Back' });
     this.page.locator('div').filter({ hasText: 'Welcome to Cheapflights.Let\'s' }).nth(4);
     this.page.getByRole('link', { name: 'Privacy Policy' });
     this.page.getByRole('link', { name: 'Terms of Use' });
     this.page.getByRole('button', { name: 'Close' });
    }


}