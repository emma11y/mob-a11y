import AxeBuilder from '@axe-core/playwright';
import { expect, type Page } from '@playwright/test';

export const printAxeViolations = (violations: any[]) => {
  if (violations.length === 0) {
    console.log('✅ Aucune violation d’accessibilité détectée');
    return;
  }

  console.log(`❌ ${violations.length} règle(s) d’accessibilité violée(s)\n`);

  violations.forEach((violation) => {
    console.log(`🔎 ${violation.id} (${violation.impact})`);
    console.log(`   ${violation.help}`);

    violation.nodes.forEach((node: any) => {
      console.log(`   → ${node.target.join(', ')}`);
    });

    console.log('');
  });
};

export const expectNoColorContrastViolations = async (
  page: Page,
  selector = 'body',
) => {
  const results = await new AxeBuilder({ page }).include(selector).analyze();

  // ne garder que les violations de contraste
  const contrastViolations = results.violations.filter(
    (v) => v.id === 'color-contrast',
  );

  if (contrastViolations.length > 0) {
    // compter toutes les occurrences dans le DOM
    const totalOccurrences = contrastViolations.reduce(
      (sum, v) => sum + v.nodes.length,
      0,
    );

    // message d’erreur détaillé
    const message = `❌ ${totalOccurrences} élément(s) affecté(s) par une violation de contraste\n\n${formatViolations(
      contrastViolations,
    )}`;

    throw new Error(message);
  }
};

export const expectNoAxeViolations = async (page: Page, selector = 'body') => {
  const results = await new AxeBuilder({ page }).include(selector).analyze();

  const { violations } = results;

  if (violations.length > 0) {
    const message = `❌ ${violations.length} violation(s)\n\n${formatViolations(violations)}`;
    throw new Error(message);
  }
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

  if (filteredViolations.length === 0) {
    console.log('✅ Aucune violation Axe sur les boutons et liens');
    return;
  }

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
};

const formatViolations = (violations: any[]) => {
  return violations
    .map((v) => {
      const nodes = v.nodes
        .map((n) => `   → ${n.target.join(', ')}`)
        .join('\n');
      return `🔎 ${v.id} (${v.impact})\n   ${v.help}\n${nodes}`;
    })
    .join('\n\n');
};
