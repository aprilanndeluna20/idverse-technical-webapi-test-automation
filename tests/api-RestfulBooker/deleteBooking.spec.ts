import { test, expect } from '@playwright/test';
import deleteBookingDataID from '../utils/TestData/api-test-data.json';

test.describe('DELETE Booking', () => {
  const apiURL = process.env.API_URL;

  test('should delete a booking from a valid id', async ({ request }) => {
    const id = deleteBookingDataID;
    const response = await request.delete('https://restful-booker.herokuapp.com/booking/1',{
    headers: {
      'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM=',
      'Content-Type': 'application/json'
    }
    });
    expect(response.status()).toBe(405);
  });
});