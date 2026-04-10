export type FocusTrapController = {
  activate: () => void;
  deactivate: () => void;
};

export function createFocusTrap(
  modal: HTMLElement,
  selectors: string[],
): FocusTrapController {
  const getFocusable = (): HTMLElement[] => {
    return Array.from(
      modal.querySelectorAll<HTMLElement>(selectors.join(',')),
    ).filter((el) => {
      const style = window.getComputedStyle(el);
      return (
        !el.hasAttribute('disabled') &&
        style.display !== 'none' &&
        style.visibility !== 'hidden' &&
        el.offsetParent !== null
      );
    });
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Tab') return;

    const focusable = getFocusable();
    if (focusable.length === 0) {
      event.preventDefault();
      modal.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement as HTMLElement | null;

    if (event.shiftKey) {
      if (!active || active === first || !modal.contains(active)) {
        event.preventDefault();
        last.focus();
      }
    } else {
      if (!active || active === last || !modal.contains(active)) {
        event.preventDefault();
        first.focus();
      }
    }
  };

  const onFocusIn = (event: FocusEvent) => {
    const target = event.target as Node | null;
    if (target && !modal.contains(target)) {
      const focusable = getFocusable();
      (focusable[0] ?? modal).focus();
    }
  };

  const activate = () => {
    if (!modal.hasAttribute('tabindex')) {
      modal.setAttribute('tabindex', '0');
    }

    const focusable = getFocusable();
    (focusable[0] ?? modal).focus();

    document.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('focusin', onFocusIn, true);
  };

  const deactivate = () => {
    if (modal.hasAttribute('tabindex')) {
      modal.setAttribute('tabindex', '-1');
    }

    document.removeEventListener('keydown', onKeyDown, true);
    document.removeEventListener('focusin', onFocusIn, true);
  };

  return { activate, deactivate };
}
