import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly logoutLink: Locator;
  readonly accountsOverviewText: Locator;

  constructor(page: Page) {
    this.page = page;

    this.logoutLink = page.locator('text=Log Out');
    this.accountsOverviewText = page.getByRole('heading', { name: 'Accounts Overview' });
  }

  async logout() {
    await this.logoutLink.click();
  }
}