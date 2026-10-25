import { test, expect } from '@playwright/test';
import getBookingDataID from '../utils/TestData/api-test-data.json';

test.describe('GET Booking', () => {
  const apiURL = process.env.API_URL;

  test('should get a booking from a valid id', async ({ request }) => {
    const id = getBookingDataID;
    const response = await request.get(process.env.API_URL + '/99',{
          headers: {
      'Accept': 'application/json'
    }
    });
    expect(response.status()).toBe(200);

    // const body = await response.json();
    // expect(body).toHaveProperty('page', 2);
  });
});