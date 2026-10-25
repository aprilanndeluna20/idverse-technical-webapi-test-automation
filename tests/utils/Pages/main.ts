import { AndroidKey, Locator, Page,  } from "@playwright/test";

export class mainPage{

readonly CheapFlightLogo: any;
readonly profileIcon: Locator;
readonly welcomeText: Locator;
readonly googleButton: Locator;
readonly continueWithEmailBtn: Locator;
readonly EnterEmailText: Locator;
readonly BackBtn: Locator;
readonly whatsYourEmailText: Locator;
readonly googleSignIn: Locator;
readonly errorMsg: Locator;
readonly signInEmail: Locator;


    constructor(private page: Page){
     this.CheapFlightLogo = this.page.getByRole('link', { name: 'Go to the cheapflights' });
     this.profileIcon = this.page.getByRole('button', { name: 'Sign in' });
     this.welcomeText = this.page.locator('div').filter({ hasText: 'Welcome to Cheapflights.Let\'s' }).nth(4);
     this.googleSignIn = this.page.getByText('Sign in or create an account');
     this.googleButton = this.page.getByRole('button', { name: 'Google' });
     this.continueWithEmailBtn = this.page.getByRole('button', { name: 'Continue with email' });
     this.whatsYourEmailText = this.page.getByText('BackWhat\'s your email address');
     this.EnterEmailText = this.page.getByRole('textbox', { name: 'Enter email' });
     this.BackBtn = this.page.getByRole('button', { name: 'Back' });
     this.signInEmail = this.page.getByRole('dialog', { name: 'Sign in or create an account' }).getByRole('button', { name: 'Sign in' });
     this.errorMsg =this.page.getByText('Please enter your email');
    }

    async navigateToProfileIcon(){
        await this.profileIcon.click();
    };
}
