import { AndroidKey, Locator, Page,  } from "@playwright/test";

export class searchFlights{
    readonly returnTripType: Locator;
    readonly oneWayTripType: Locator;
    readonly multiCityTripType: Locator;
    readonly fromLocation: Locator;
    readonly toLocation: Locator;
    readonly departReturnText: Locator;
    readonly departureDate: Locator;
    readonly returnDate: Locator;
    readonly economyClass: Locator;
    readonly premiumClass: Locator;
    readonly businessClass: Locator;
    readonly firstClass: Locator;
    readonly adultPassenger: Locator;
    readonly childPassenger: Locator;
    readonly infantPassenger: Locator;
    readonly addAdult: Locator;
    readonly lessAdult: Locator;
    readonly addChild: Locator;
    readonly lessChild: Locator;
    readonly addInfant: Locator;
    readonly lessInfant: Locator;
    readonly childAge: Locator;
    readonly addChildAge: Locator;
    readonly searchBtn: Locator;
    readonly dismissBtn: Locator;
    readonly swapToFrom: Locator;
    readonly removeFromValue: Locator;
    readonly tripTypeDropDown: Locator;
    readonly askAnything: Locator;
    readonly cheapest: Locator;
    readonly best: Locator;
    readonly quickest: Locator;
    readonly nextMonth: Locator;

    //error components
    readonly errorOccurred: Locator;
    readonly emptyToErrorMsg: Locator;
    readonly emptyFromErrorMsg: Locator;
    readonly enterValidDepartMsg: Locator;
    readonly enterValidReturnMsg: Locator;
    readonly noMatchingRecords:Locator;
    
    //multiCity
    readonly clearAll: Locator;
    readonly from1: Locator;
    readonly from2: Locator;
    readonly from3: Locator;
    readonly to1: Locator;
    readonly to2: Locator;
    readonly to3: Locator;
    readonly depart1: Locator;
    readonly depart2: Locator;
    readonly depart3: Locator;
    readonly cabin1: Locator;
    readonly cabin2: Locator;
    readonly cabin3: Locator;
    readonly addAnotherFlight: Locator;
    readonly busClass: Locator;
    readonly premEcon: Locator;
    readonly compareFlight: Locator;


    constructor(private page: Page){
        this.searchBtn = this.page.getByRole('button', { name: 'Search', exact: true });
        this.dismissBtn = this.page.getByRole('button', { name: 'Dismiss' });
        this.removeFromValue = this.page.getByRole('button', { name: 'Remove value' });
        this.tripTypeDropDown = this.page.getByRole('combobox', { name: 'Trip type', exact: true });

        this.returnTripType = this.page.getByRole('combobox', { name: 'Trip type Return' });
        this.oneWayTripType = this.page.getByRole('option', { name: 'One-way' });
        this.multiCityTripType = this.page.getByRole('option', { name: 'Multi-city' });
        this.fromLocation = this.page.getByRole('combobox', { name: 'Origin location' });
        this.toLocation = this.page.getByRole('combobox', { name: 'Destination location' });
        this.askAnything = this.page.getByRole('combobox', { name: 'Ask anything' });
        this.departReturnText = this.page.getByRole('button', { name: 'Departure  -  Return' });
        this.departureDate = this.page.getByRole('button', { name: 'Departure date' });
        this.returnDate = this.page.getByRole('button', { name: 'Return date' });
        this.economyClass = this.page.getByRole('radio', { name: 'Economy', exact: true });
        this.premiumClass = this.page.getByRole('radio', { name: 'Premium Economy' });
        this.businessClass = this.page.getByRole('radio', { name: 'Business' });
        this.firstClass = this.page.getByRole('radio', { name: 'First' });

        this.adultPassenger = this.page.locator('div').filter({ hasText: 'TravellersAdults18+Children0-' }).first();
        this.addAdult = this.page.getByRole('button', { name: 'Increment' }).first();
        this.lessAdult = this.page.getByRole('button', { name: 'Decrement' }).first();

        this.childPassenger = this.page.locator('div').filter({ hasText: 'Children0-' }).nth(5);
        this.addChild = this.page.getByRole('button', { name: 'Increment' }).nth(1);
        this.lessChild = this.page.getByRole('button', { name: 'Decrement' }).nth(1);
        this.childAge = this.page.getByRole('combobox', { name: 'Age Age' }).first();
        this.addChildAge = this.page.locator('.udzg.udzg-mod-size-small.udzg-mod-radius-medium > .Uqct-title > .c1muT-title-with-chevron > .c1muT > .c15uy > svg');
        this.infantPassenger = this.page.locator('div').filter({ hasText: 'Infants on lapunder' }).nth(5);
        this.addInfant = this.page.getByRole('button', { name: 'Increment' }).nth(2);
        this.lessInfant = this.page.getByRole('button', { name: 'Decrement' }).nth(2);
        this.swapToFrom = this.page.getByRole('button', { name: 'Swap origin and destination' });
        this.nextMonth = this.page.getByRole('button', { name: 'Next month' });



         //Error Message for empty fields
        this.errorOccurred = this.page.getByText('An error occurred while');
        this.emptyFromErrorMsg = this.page.getByText('Please enter a \'From\' airport.');
        this.emptyToErrorMsg = this.page.getByText('Please enter a \'To\' airport.');
        this.enterValidDepartMsg = this.page.getByText('Please enter a valid \'Depart');
        this.enterValidReturnMsg = this.page.getByText('Please enter a valid \'Return');
        this.noMatchingRecords = this.page.getByText('No matching locations found.');


         //other components
          this.page.getByRole('button', { name: 'Previous month' });
          this.page.getByText('Please enter a Destination');

          //MultiCity
          this.from1 = this.page.getByRole('combobox', { name: 'Origin location' }).first();
          this.from2 = this.page.getByRole('combobox', { name: 'Origin location' }).nth(1);
          this.from3 = this.page.getByRole('combobox', { name: 'Origin location' }).nth(2);
          this.to1 = this.page.getByRole('combobox', { name: 'Destination location' }).first();
          this.to2 = this.page.getByRole('combobox', { name: 'Destination location' }).nth(1);
          this.to3 = this.page.getByRole('combobox', { name: 'Destination location' }).nth(2);
          this.depart1 = this.page.getByRole('button', { name: 'Departure date' }).first();
          this.depart2 = this.page.getByRole('button', { name: 'Departure date' }).nth(1);
          this.depart3 = this.page.getByRole('button', { name: 'Departure date' }).nth(2);
          this.clearAll = this.page.getByRole('button', { name: 'Reset the search form' });
          this.cabin1 = this.page.getByRole('combobox', { name: 'Cabin type Economy' }).first();
          this.cabin2 = this.page.getByRole('combobox', { name: 'Cabin type Economy' }).nth(1);
          this.cabin3 = this.page.locator('div:nth-child(3) > .f-iD > .f-iD-row > .J_T2-row > div:nth-child(3) > .c2cnN > .udzg > .Uqct-title > .xAR_');
          this.addAnotherFlight =  this.page.getByRole('button', { name: 'Add another flight' });
          this.compareFlight = this.page.getByRole('checkbox', { name: 'Trip.com' });

        //  page.getByRole('combobox', { name: 'Cabin type Business' });
        //  page.getByText('Economy').nth(1)
          this.busClass = this.page.getByRole('option', { name: 'Business' });
          this.premEcon = this.page.getByRole('option', { name: 'Premium Economy' });

          //Asserts
          this.cheapest = this.page.getByRole('button', { name: 'Cheapest' });
          this.best = this.page.getByRole('button', { name: 'Best', exact: true });
          this.quickest = this.page.getByRole('button', { name: 'Quickest' });


    }


    async navigateToDepartReturnCalendar(departDate: any, returnDate: any){
        const departdt = this.page.getByRole('button', { name: departDate, exact: true });
        departdt.waitFor({ state: 'visible' });
        await departdt.click();
        const returndt = this.page.getByRole('button', { name: returnDate, exact: true });
        returndt.waitFor({ state: 'visible' });
        await returndt.click();
    };

    async navigateCalendarNextMonth(departDate: any){
        this.returnDate.click();
        this.nextMonth.click({clickCount: 3});
        const departdt = this.page.getByRole('button', { name: departDate, exact: true });
        departdt.waitFor({ state: 'visible' });
        await departdt.click();
        // const returndt = this.page.getByRole('button', { name: returnDate, exact: true });
        // returndt.waitFor({ state: 'visible' });
        // await returndt.click();
    };

    async searchFrom(origin: string){
        await this.removeFromValue.click();
        await this.fromLocation.click();
        this.fromLocation.fill(origin);
        await this.page.getByText(origin).click();
     }


     async getLocation(loc:string){
        await this.page.getByText(loc, {exact: true}).click();
     }

      async getLocationOneWay(loc:string){
        await this.page.getByText(loc).click();
     }


    async selectChildAge(age: string){
        this.addChild.click();
        this.addChildAge.click();
        this.page.getByRole('option', { name: age , exact: true}).click();
    }

    async getDepartDate(date: string){
        const departdt = this.page.getByRole('button', { name: date, exact: true });
        departdt.waitFor({ state: 'visible' });
        await departdt.click();    
    }


}
