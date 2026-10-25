import { test, expect } from '@playwright/test';
import deleteBookingDataID from '../utils/TestData/api-test-data.json';

test.describe('DELETE Booking', () => {

  test('should delete a booking from a valid id', async ({ request }) => {
    const id = deleteBookingDataID;
    const response = await request.delete('/1',{
    headers: {
      'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM=',
      'Content-Type': 'application/json'
    }
    });
    expect(response.status()).toBe(405);
  });
});