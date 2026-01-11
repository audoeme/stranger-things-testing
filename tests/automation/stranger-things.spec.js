import { test, expect } from '@playwright/test';
import { LandingPage } from './src/pages/LandingPage';

const URL = 'https://audoeme.github.io/stranger-things-testing/';

test.describe('Stranger Things Landing Page', () => {

test('CT01 – Hero button alert', async ({ page }) => {
    const sp = new LandingPage(page);
    await page.goto(URL);

    page.on('dialog', async dialog => {
      expect(dialog.message()).toBe('Você entrou no Mundo Invertido!');
      await dialog.dismiss();
    });

    await sp.clickHeroButton();
  });    

test('CT02 – Hover effect on season cards', async ({ page }) => {
    const sp = new LandingPage(page);
    await page.goto(URL);

    const cardsCount = await sp.getSeasonCardsCount();

    for (let i = 0; i < cardsCount; i++) {
      await sp.hoverSeasonCard(i);

      const transform = await sp.getSeasonCardTransform(i);
      const boxShadow = await sp.getSeasonCardBoxShadow(i);

      expect(transform).not.toBe('none');
      expect(boxShadow).not.toBe('none');
    }
  });

test('CT03 – Newsletter valid submission', async ({ page }) => {
    const lp = new LandingPage(page);
    await page.goto(URL);

    page.on('dialog', async dialog => {
      expect(dialog.message()).toBe('Inscrição realizada com sucesso!');
      await dialog.accept();
    });

    await lp.fillNewsletterForm('Lucas', 'lucas@test.com', 'Eleven é minha favorita!');
    await lp.submitNewsletter();
  });

test('CT04 – Newsletter invalid submission', async ({ page }) => {
    const lp = new LandingPage(page);
    await page.goto(URL);

    await lp.submitNewsletter();

    await expect(lp.nameInput).toBeFocused();
  });  

test('CT05 – Scroll via menu links', async ({ page }) => {
  const lp = new LandingPage(page);
  await page.goto(URL);

  await lp.goToHome();
  await lp.goToSeasons();
  await lp.goToNewsletter();
  await lp.scrollToFooterAndCheck();
  });
});
