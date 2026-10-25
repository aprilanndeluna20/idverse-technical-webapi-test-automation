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

    //error components
    readonly errorOccurred: Locator;
    readonly emptyToErrorMsg: Locator;
    readonly emptyFromErrorMsg: Locator;
    readonly enterValidDepartMsg: Locator;
    readonly enterValidReturnMsg: Locator;
    readonly noMatchingRecords:Locator;
    



    constructor(private page: Page){
        this.searchBtn = this.page.getByRole('button', { name: 'Search', exact: true });
        this.dismissBtn = this.page.getByRole('button', { name: 'Dismiss' });
        this.removeFromValue = this.page.getByRole('button', { name: 'Remove value' });
        this.tripTypeDropDown = this.page.getByRole('combobox', { name: 'Trip type', exact: true });

        this.returnTripType = this.page.getByRole('combobox', { name: 'Trip type Return' });
        this.oneWayTripType = this.page.getByRole('combobox', { name: 'Trip type One-way' });
        this.multiCityTripType = this.page.getByRole('combobox', { name: 'Trip type Multi-city' });
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

         this.page.getByRole('combobox', { name: 'Trip type', exact: true });

        //Validations
         this.page.locator('div').filter({ hasText: 'See your recent searches on' }).nth(4);
         this.page.getByRole('button', { name: 'Close' }); 

         //Error Message for empty fields
        this.errorOccurred = this.page.getByText('An error occurred while');
        this.emptyFromErrorMsg = this.page.getByText('Please enter a \'From\' airport.');
        this.emptyToErrorMsg = this.page.getByText('Please enter a \'To\' airport.');
        this.enterValidDepartMsg = this.page.getByText('Please enter a valid \'Depart');
        this.enterValidReturnMsg = this.page.getByText('Please enter a valid \'Return');
        this.noMatchingRecords = this.page.getByText('No matching locations found.');


         //other components
          this.page.getByRole('combobox', { name: 'Origin location' });
          this.page.getByRole('button', { name: 'Economy' });
          this.page.getByText('Adults18+');
          this.page.getByRole('button', { name: 'Previous month' });
          this.page.getByRole('button', { name: 'Next month' });
          this.page.getByRole('combobox', { name: 'Ask anything' });
          this.page.getByText('Please enter a Destination');

          //MultiCity
          this.page.getByRole('combobox', { name: 'Trip type Return' });
          this.page.getByRole('combobox', { name: 'Origin location' }).first();
          this.page.getByRole('combobox', { name: 'Origin location' }).nth(1);
          this.page.getByRole('combobox', { name: 'Origin location' }).nth(2);
          this.page.getByRole('combobox', { name: 'Destination location' }).first();
          this.page.getByRole('combobox', { name: 'Destination location' }).nth(1);
          this.page.getByRole('combobox', { name: 'Destination location' }).nth(2);
          this.page.getByRole('button', { name: 'Departure date' }).first();
          this.page.getByRole('button', { name: 'Departure date' }).first();
          this.page.getByRole('combobox', { name: 'Cabin type Economy' }).first();
          this.page.getByRole('combobox', { name: 'Cabin type Economy' }).first();
          this.page.getByText('Premium Economy');
          this.page.getByRole('combobox', { name: 'Cabin type Premium Economy' });
          this.page.locator('div').filter({ hasText: /^Business$/ }).nth(4);
          this.page.getByRole('combobox', { name: 'Cabin type Business' });
          this.page.locator('div').filter({ hasText: /^Economy$/ }).nth(4);
          this.page.getByRole('button', { name: 'Departure date' }).nth(2);
          this.page.getByRole('button', { name: 'Departure date' }).nth(1);
          this.page.getByRole('combobox', { name: 'Trip type', exact: true });
          this.page.getByRole('button', { name: 'Reset the search form' });
          this.page.getByRole('button', { name: 'Dismiss' });

    }


    async navigateToDepartReturnCalendar(departDate: string, returnDate: string){
        this.departureDate.dblclick();
        this.page.getByRole('button', { name: departDate, exact: true }).click();
        this.page.getByRole('button', { name: returnDate, exact: true }).click();
    };

    async searchFrom(origin: string){
        this.removeFromValue.click();
        this.fromLocation.fill(origin);
        this.page.locator('[id="0"]').check();
    }

      async searchTo(destination: string){
        try{
            this.toLocation.fill(destination, {timeout: 20000});

        }catch{
            this.askAnything.fill(destination, {timeout: 20000});
        }
    }

    async selectChildAge(age: string){
        this.addChild.click();
        this.addChildAge.click();
        this.page.getByRole('option', { name: age , exact: true}).click();
    }



}
