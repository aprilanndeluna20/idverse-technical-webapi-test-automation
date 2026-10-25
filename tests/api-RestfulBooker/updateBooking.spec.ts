import { test, expect } from '@playwright/test';
import updateBooking from '../utils/TestData/api-test-data.json';

test.describe.skip('UPDATE Booking', () => {

  test('should create a booking from a valid id', async ({ request }) => {
    const response = await request.post('https://restful-booker.herokuapp.com/booking/99', {
        data: 
        {
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
          'Cookie': 'token=abc123'
    }
    });
    expect(response.status()).toBe(500);
    
    // const body = await response.json();
    // expect(body).toHaveProperty('page', 2);
  });
});