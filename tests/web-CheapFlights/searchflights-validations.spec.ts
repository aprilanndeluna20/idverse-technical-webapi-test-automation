import {test, expect} from '@playwright/test';
import { mainPage } from '../utils/Pages/main';
import { searchFlights } from '../utils/Pages/searchflights';

let search: searchFlights;

test.beforeEach(async ({page}) =>{
    await page.goto('/');
    search = new searchFlights(page);
});

test.describe('Error and Validattions', () => {

    test('would produce an error modal if from/to, departure/return were empty upon clicking search button', async ({}) => {
        await search.removeFromValue.click();
        await search.searchBtn.click();
        await expect(search.errorOccurred).toBeVisible();
        await expect(search.emptyFromErrorMsg).toBeVisible();
        await expect(search.emptyToErrorMsg).toBeVisible();
        await expect(search.enterValidDepartMsg).toBeVisible();
        await expect(search.enterValidReturnMsg).toBeVisible();
    });

    test('error message for invalid destination value ', async ({}) => {
        await search.removeFromValue.click();
        await search.fromLocation.fill('invalidlocation');
        await expect(search.noMatchingRecords).toContainText('No matching locations found.')
    });
});

test.describe('Other functionalities', () => {

    test('should maximize the traveller adult count to 9 and infant to 7', async ({}) => {
        await search.tripTypeDropDown.click();
        await search.addAdult.click({clickCount: 9});
        await search.addInfant.click({clickCount: 7});
        await expect(search.addAdult).toBeDisabled();
        await expect(search.addInfant).toBeDisabled();
    });

    test('should maximize the traveller children count to 7 and with age 1 -17 ', async ({}) => {
    });

    test('multicity - resetting the form ', async ({}) => {
        
    });

    test('multicity - clearall ', async ({}) => {
    });


});

