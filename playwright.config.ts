import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/automation', // onde estão seus testes
  timeout: 30000,
  retries: 1,
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1280, height: 720 },
  },
});
