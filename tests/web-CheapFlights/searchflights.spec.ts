import {test, expect} from '@playwright/test';
import { searchFlights } from '../utils/Pages/searchflights';
import {locations} from '../utils/TestData/web-test-data.json';

let search: searchFlights;
test.beforeEach(async ({page}) =>{
    await page.goto('/');
    search = new searchFlights(page);
});

test.describe.only('Search Flights', () => {

    test('should search flight default From location to Taipei in an economy as return flight ', async ({page}) => {
        if(await search.toLocation.isVisible()){
            await search.toLocation.click();
        }else{
            await search.askAnything.click();
        }
        await search.getLocation(locations.HK);
        await search.navigateToDepartReturnCalendar('16 November, 2026','18 November, 2026' );
        await search.tripTypeDropDown.click();
        await search.economyClass.click();
        await search.searchBtn.click();

        await page.waitForLoadState('load');
        await expect(search.cheapest).toBeVisible({timeout: 15000});
        await expect(search.best).toBeVisible({timeout: 15000});
        await expect(search.quickest).toBeVisible({timeout: 15000});
    });

    test('should search flight changed From location to Hong Kong in a premium economy with 2 traveller as return flight ', async ({page}) => {
        await search.searchFrom(locations.CB);
        if(await search.toLocation.isVisible()){
            await search.toLocation.click();
        }else{
            await search.askAnything.click();

        }
        await search.getLocation(locations.TP);
        await search.navigateToDepartReturnCalendar('16 November, 2026','17 November, 2026' );
        await search.tripTypeDropDown.click();
        await search.addInfant.click();
        await search.premiumClass.click();
        await search.searchBtn.click();

        await page.waitForLoadState('load');
        await expect(search.best).toBeVisible({timeout: 15000});
        await expect(search.cheapest).toBeVisible({timeout: 15000});
        await expect(search.quickest).toBeVisible({timeout: 15000});
    });

    // test('should search flight with return flight ', async ({page}) => {
    //     if(await search.toLocation.isVisible()){
    //         await search.toLocation.click();
    //     }else{
    //         await search.askAnything.click();

    //     }
    //     await search.getLocation(locations.BR);
    //     await search.swapToFrom.click();
    //     await search.navigateCalendarNextMonth('24 February, 2027' );
    //     await search.tripTypeDropDown.click();
    //     await search.addAdult.click();
    //     await search.businessClass.click();
    //     await search.searchBtn.click();

    //     await page.waitForLoadState('load');
    //     await expect(search.best).toBeVisible({timeout: 15000});
    //     await expect(search.cheapest).toBeVisible({timeout: 15000});
    //     await expect(search.quickest).toBeVisible({timeout: 15000});
    // });


    test('should search flight with oneway flight ', async ({page}) => {
        await search.returnTripType.click();
        await search.oneWayTripType.click();
         if(await search.toLocation.isVisible()){
            await search.toLocation.click();
        }else{
            await search.askAnything.click();

        }
        await search.getLocationOneWay(locations.HK);
        await search.getDepartDate('17 November, 2026');
        await search.tripTypeDropDown.click();
        await search.businessClass.click();
        await search.searchBtn.click();

        await page.waitForLoadState('load');
        await expect(search.best).toBeVisible({timeout: 15000});
        await expect(search.cheapest).toBeVisible({timeout: 15000});
        await expect(search.quickest).toBeVisible({timeout: 15000});

    });


    test('should search flight with multicity flight ', async ({page}) => {
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

        await search.searchBtn.click();
        await page.waitForLoadState('load');
        await expect(search.cheapest).toBeVisible({timeout: 30000});
        await expect(search.best).toBeVisible({timeout: 15000});
        await expect(search.quickest).toBeVisible({timeout: 15000});

 });


});


