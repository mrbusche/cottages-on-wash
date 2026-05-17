import { test, expect } from '@playwright/test';

const baseURL = 'https://cottagesonwash.com';

test.describe('Verifies Cozy Cottage', () => {
  test('link works', async ({ page }) => {
    await page.goto(baseURL);
    await page.locator('#cottageLink').click();
    await expect(page.locator('body')).toContainText('Cozy Cottage by Cottages on Wash', { timeout: 10000 });
  });
});

test.describe('Verifies Haven Hideaway', () => {
  test('link works', async ({ page }) => {
    await page.goto(baseURL);
    await page.locator('#havenLink').click();
    await expect(page.locator('body')).toContainText('Haven Hideaway by Cottages on Wash');
  });
});

test.describe('Verifies Both Cottages', () => {
  test('link works', async ({ page }) => {
    await page.goto(baseURL);
    await page.locator('#bothLink').click();
    await expect(page.locator('body')).toContainText('South Haven');
  });
});
