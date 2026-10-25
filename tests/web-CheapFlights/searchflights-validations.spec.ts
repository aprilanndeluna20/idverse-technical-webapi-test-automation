import {test, expect} from '@playwright/test';
import { locations } from '../utils/TestData/web-test-data.json';
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


    test('multicity - clearall ', async ({}) => {
         await search.returnTripType.click();
        await search.multiCityTripType.click();
        await search.to1.fill(locations.HN);
        await search.getLocation(locations.HN);
        await search.depart1.click();
        await search.getDepartDate('30 October, 2026');

        await search.from2.fill(locations.HK);
        await search.getLocation(locations.HK);
        await search.depart2.click();
        await search.getDepartDate('20 November, 2026')

        await search.cabin2.click();
        await search.premEcon.click();

        await search.from3.fill(locations.CB);
        await search.getLocation(locations.CB);
        await search.to3.fill(locations.MC);
        await search.getLocation(locations.MC);
        await search.depart3.click();
        await search.getDepartDate('9 December, 2026');
        await search.cabin3.click();
        await search.busClass.click();

        await search.clearAll.click();

        await expect(search.to1).toBeEmpty();
        await expect(search.to3).toBeEmpty();

    });


});

