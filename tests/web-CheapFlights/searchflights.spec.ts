import {test, expect} from '@playwright/test';
import { searchFlights } from '../utils/Pages/searchflights';

let search: searchFlights;
test.beforeEach(async ({page}) =>{
    await page.goto('/');
    search = new searchFlights(page);
});

test.describe.only('Return Flight Type', () => {

    test('should search flight default From location to Anywhere in an economy with 3 travellers as return flight ', async ({page}) => {
        await search.searchTo('Taipei City, Taiwan');
        await search.navigateToDepartReturnCalendar('3 November,','10 November, 2026' );
        await search.tripTypeDropDown.click();
        await search.selectChildAge('7');
        await search.economyClass.click();
        await search.searchBtn.click();
        const page1Promise = page.waitForEvent('popup');
        const flightResult = await page1Promise;
        await expect(flightResult.getByRole('button', { name: 'Cheapest' })).toBeVisible();
        await expect(flightResult.getByRole('button', { name: 'Best', exact: true })).toBeVisible();
        await expect(flightResult.getByRole('button', { name: 'Quickest' })).toBeVisible();
    });

    test('should search flight as one-way flight ', async ({page}) => {
        try {
                  await page.getByRole('combobox', { name: 'Destination location' }).click();
        } catch {
                  await page.getByRole('combobox', { name: 'Ask anything' }).click();
        }
        await page.getByRole('button', { name: '25 October,' }).click();
        await page.getByRole('button', { name: '28 October, 2026' }).click();
        await page.getByRole('button', { name: 'Increment' }).nth(1).click();



    });

    test('should search flight with return flight ', async ({}) => {
        await search.searchTo('Taipei City, Taiwan');
        await search.navigateToDepartReturnCalendar('3 November,', '10 November, 2026')

    });


});

test.describe('One-way Flight Type', () => {

    test('should search flight with return flight ', async ({}) => {
    });

    test('should search flight as one-way flight ', async ({}) => {
    });
});

test.describe('Multicity Flight Type', () => {

    test('should search flight with return flight ', async ({}) => {
    });

    test('should search flight as one-way flight ', async ({}) => {
    });


});


