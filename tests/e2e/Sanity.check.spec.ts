import { expect, test } from '@playwright/test';

const targetUrl = process.env.ENVIRONMENT_URL || process.env.PRODUCTION_URL;

if (!targetUrl) {
  throw new Error('Please set the ENVIRONMENT_URL or PRODUCTION_URL environment variable');
}

test.describe('Sanity', () => {
  test.describe('Static pages', () => {
    test('should display the homepage', async ({ page }) => {
      await page.goto(targetUrl);

      await expect(page.getByText('Welcome to our Home page')).toBeVisible();
    });

    test('should navigate to the about page', async ({ page }) => {
      await page.goto(targetUrl);

      await page.getByRole('link', { name: 'About' }).click();
      await expect(page).toHaveURL(/about$/);

      await expect(page.getByText('Welcome to our About page', { exact: false })).toBeVisible();
    });

    test('should navigate to the portfolio page', async ({ page }) => {
      await page.goto(targetUrl);

      await page.getByRole('link', { name: 'Portfolio' }).click();
      await expect(page).toHaveURL(/portfolio$/);

      await expect(
        page.locator('main').getByRole('link', {
          name: /^Portfolio/,
        })
      ).toHaveCount(6);
    });
  });
});
