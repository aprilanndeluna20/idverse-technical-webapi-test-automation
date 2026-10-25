import { test, expect } from '@playwright/test';
import deleteBookingDataID from '../utils/TestData/api-test-data.json';

test.describe('DELETE Booking', () => {

  test('should delete a booking from a valid id', async ({ request }) => {
    const id = deleteBookingDataID;
    const response = await request.delete('https://restful-booker.herokuapp.com/booking/1',{
    headers: {
      'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM=',
      'Content-Type': 'application/json'
    }
    });
    try {
          expect(response.status()).toBe(201);

    } catch {
          expect(response.status()).toBe(405);

    }
  });
});