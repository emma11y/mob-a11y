import AxeBuilder from '@axe-core/playwright';
import { ElementHandle, expect, Locator, type Page } from '@playwright/test';

export async function switchToLightTheme(page: Page) {
  const dataSelectedTheme = await page
    .locator('html')
    .getAttribute('data-selected-theme');

  if (dataSelectedTheme !== 'light') {
    await page.getByTitle('Clair').click();
  }

  await page.waitForSelector('[data-selected-theme="light"]');
}

export async function switchToDarkTheme(page: Page) {
  const dataSelectedTheme = await page
    .locator('html')
    .getAttribute('data-selected-theme');

  if (dataSelectedTheme !== 'dark') {
    await page.getByTitle('Sombre').click();
  }

  await page.waitForSelector('[data-selected-theme="dark"]');
}

export const printAxeViolations = async (page: any) => {
  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  if (accessibilityScanResults.violations.length) {
    console.log(
      `❌ ${accessibilityScanResults.violations.length} règle(s) d’accessibilité violée(s)\n`,
    );

    accessibilityScanResults.violations.forEach((violation) => {
      console.log(`🔎 ${violation.id} (${violation.impact})`);
      console.log(`   ${violation.help}`);

      violation.nodes.forEach((node: any) => {
        console.log(`   → ${node.target.join(', ')}`);
      });

      console.log('');
    });
  }

  expect(accessibilityScanResults.violations.length).toBe(0);
};

export const expectNoAxeViolations = async (page: Page, selector = 'body') => {
  const results = await new AxeBuilder({ page }).include(selector).analyze();

  const { violations } = results;

  if (violations.length > 0) {
    const message = `❌ ${violations.length} violation(s)\n\n${formatViolations(violations)}`;
    throw new Error(message);
  }

  expect(violations.length).toBe(0);
};

export const expectNoAxeViolationsWithId = async (
  page: Page,
  ids: string[],
  selector = 'body',
) => {
  const results = await new AxeBuilder({ page }).include(selector).analyze();

  const violations = results.violations.filter((v) => ids.includes(v.id));

  if (violations.length > 0) {
    const message = `❌ ${violations.length} violation(s)\n\n${formatViolations(violations)}`;
    throw new Error(message);
  }

  expect(violations.length).toBe(0);
};

export const printButtonLinkViolations = async (
  page: Page,
  selector = 'body',
) => {
  const results = await new AxeBuilder({ page }).include(selector).analyze();

  const filteredViolations = results.violations
    .map((v) => {
      const nodes = v.nodes.filter((n: any) => {
        const tag = n.html?.match(/^<([a-zA-Z]+)/)?.[1]?.toUpperCase();
        return ['BUTTON', 'A'].includes(tag);
      });
      return { ...v, nodes };
    })
    .filter((v) => v.nodes.length > 0);

  expect(filteredViolations.length).toBe(0);

  if (filteredViolations.length) {
    let message = `❌ ${filteredViolations.length} violation(s)\n\n`;

    filteredViolations.forEach((v: any) => {
      message += `🔎 ${v.id} (${v.impact})\n`;
      message += `   ${v.help}\n`;

      v.nodes.forEach((n: any) => {
        message += `   → ${n.target.join(', ')}\n`;
      });

      message += '\n';
    });

    console.log(message);

    throw new Error(message);
  }
};

const formatViolations = (violations: any[]) => {
  return violations
    .map((v) => {
      const nodes = v.nodes
        .map((n: any) => `   → ${n.target.join(', ')}`)
        .join('\n');
      return `🔎 ${v.id} (${v.impact})\n   ${v.help}\n${nodes}`;
    })
    .join('\n\n');
};
