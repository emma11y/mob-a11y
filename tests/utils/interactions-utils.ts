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

export async function logElementInfos(
  el: ElementHandle<SVGElement | HTMLElement> | Locator,
) {
  const text = await el.innerText();
  let tagName: string;
  let id: string;
  let className: string;
  let outerHTML: string;

  if ('evaluate' in el && typeof el.evaluate === 'function') {
    tagName = await (el as any).evaluate((e: any) => e.tagName);
    id = await (el as any).evaluate((e: any) => e.id);
    className = await (el as any).evaluate((e: any) => e.className);
    outerHTML = await (el as any).evaluate((e: any) => e.outerHTML);
  } else {
    throw new Error('Element is neither an ElementHandle nor a Locator');
  }

  const selector = `${tagName.toLowerCase()}${id ? '#' + id : ''}${className ? '.' + className.split(/\s+/).filter(Boolean).join('.') : ''}`;
  console.log(
    `Élément testé : "${text.trim()}" | Selector: ${selector} | HTML: ${outerHTML.substring(0, 50)}...`,
  );
}

export async function getElementSelector(
  el: ElementHandle<SVGElement | HTMLElement> | Locator,
) {
  let tagName: string;
  let id: string;
  let className: string;

  if ('evaluate' in el && typeof el.evaluate === 'function') {
    tagName = await (el as any).evaluate((e: any) => e.tagName);
    id = await (el as any).evaluate((e: any) => e.id);
    className = await (el as any).evaluate((e: any) => e.className);
  } else {
    throw new Error('Element is neither an ElementHandle nor a Locator');
  }

  return `${tagName.toLowerCase()}${id ? '#' + id : ''}${className ? '.' + className.split(/\s+/).filter(Boolean).join('.') : ''}`;
}
