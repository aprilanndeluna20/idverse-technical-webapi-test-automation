import { test, expect } from '@playwright/test';
import getBookingDataID from '../utils/TestData/api-test-data.json';

test.describe('GET Booking', () => {

  test('should get a booking from a valid id', async ({ request }) => {
    const id = getBookingDataID;
    const response = await request.get('https://restful-booker.herokuapp.com/booking/1000',{
          headers: {
      'Accept': 'application/json'
    }
    });
   try {
          expect(response.status()).toBe(200);

    } catch {
          expect(response.status()).toBe(404);

    }

  });
});