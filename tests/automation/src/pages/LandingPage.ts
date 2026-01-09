import { Page, Locator } from '@playwright/test';


const URL = 'https://audoeme.github.io/stranger-things-testing/';

export class LandingPage {
    readonly page: Page;

    readonly heroButton: Locator;
    readonly heroSection: Locator;

    readonly seasonCards: Locator;
    readonly seasonsSection: Locator;

    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly messageTextarea: Locator;
    readonly submitButton: Locator;
    readonly contactSection: Locator;

    readonly menuHome: Locator;
    readonly menuSeasons: Locator;
    readonly menuNewsletter: Locator;

    readonly footer: Locator;

    constructor(page: Page) {
        this.page = page;

        this.heroButton = page.locator('.hero button');
        this.heroSection = page.locator('#hero');

        this.seasonCards = page.locator('.season-card');
        this.seasonsSection = page.locator('#seasons');

        this.nameInput = page.locator('.contact input[placeholder="Seu nome"]');
        this.emailInput = page.locator('.contact input[placeholder="Seu e-mail"]');
        this.messageTextarea = page.locator('.contact textarea');
        this.submitButton = page.locator('.contact button[type="submit"]');
        this.contactSection = page.locator('#contact');

        this.menuHome = page.locator('nav >> text=Início');
        this.menuSeasons = page.locator('nav >> text=Temporadas');
        this.menuNewsletter = page.locator('nav >> text=Newsletter');

        this.footer = page.locator('footer');

    }

    async clickHeroButton() {
        await this.heroButton.click();
    }

    async getSeasonCardsCount() {
        return this.seasonCards.count();
    }

    async hoverSeasonCard(index: number) {
        await this.seasonCards.nth(index).hover();
    }

    async getSeasonCardTransform(index: number) {
        return this.seasonCards.nth(index).evaluate(el =>
        window.getComputedStyle(el).transform
        );
    }

    async getSeasonCardBoxShadow(index: number) {
        return this.seasonCards.nth(index).evaluate(el =>
        window.getComputedStyle(el).boxShadow
        );
    }

    async fillNewsletterForm(name: string, email: string, message: string) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.messageTextarea.fill(message);
    }

    async submitNewsletter() {
        await this.submitButton.click();
    }

    async clickMenuHome() {
        await this.menuHome.click();
    }

    async clickMenuSeasons() {
        await this.menuSeasons.click();
    }

    async clickMenuNewsletter() {
        await this.menuNewsletter.click();
    }

    async scrollToFooter() {
        await this.page.evaluate(() =>
        window.scrollTo(0, document.body.scrollHeight)
    );
  }
}