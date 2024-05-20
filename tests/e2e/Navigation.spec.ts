import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test.describe('Static pages', () => {
    test('should take screenshot of the homepage', async ({ page }) => {
      await page.goto('/');

      await expect(page.getByText('Welcome to our Home page')).toBeVisible();
    });

    test('should take screenshot of the about page', async ({ page }) => {
      await page.goto('/about');

      await expect(
        page.getByRole('link', {
          name: 'About',
        })
      ).toBeVisible();
    });
  });
});
