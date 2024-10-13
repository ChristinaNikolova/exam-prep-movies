const { test, expect } = require('@playwright/test');

test('Check add movie page', async ({ page }) => {
    await page.goto('https://exam-prep-movies-10et.onrender.com/add-movie');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  