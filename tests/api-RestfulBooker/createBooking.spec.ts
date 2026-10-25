import { test, expect } from '@playwright/test';

test.describe('CREATE Booking', () => {

  test('should create a booking from a valid id', async ({ request }) => {
    const response = await request.post('https://restful-booker.herokuapp.com/booking', {
        data: {
            "firstname" : "Amy",
            "lastname" : "Austria",
            "totalprice" : 214,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2020-01-01",
                "checkout" : "2020-02-01"
            },
            "additionalneeds" : "Dinner"
        },
        headers: {
          'Content-Type': 'application/json',
    }
    });
    expect(response.status()).toBe(500);
    

  });
});