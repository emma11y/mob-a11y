// Main entry point for Vite
import '../style.scss';
import './components/header/header.ts';
import './components/footer/footer.ts';
import { getAppPath, Router, routes, withBasePath } from './router/router.ts';

const router = new Router(routes);

async function initApp() {
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  const layout = await fetch(new URL('./layout.html', import.meta.url)).then(
    (res) => res.text(),
  );

  appContainer.innerHTML = layout;
  syncInternalLinks();

  // Setup navigation intercept for links
  setupNavigation();

  // Load the current URL path
  const currentPath = getAppPath(window.location.pathname || '/');
  await router.navigate(currentPath, false);
  syncInternalLinks();
}

function setupNavigation() {
  // Handle link clicks
  document.addEventListener('click', async (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[href]') as HTMLAnchorElement;

    if (link && link.href.startsWith(window.location.origin)) {
      e.preventDefault();
      const path = getAppPath(link.pathname);
      await router.navigate(path);
      syncInternalLinks();
    }
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', async (e) => {
    const path = e.state?.path || '/';
    await router.navigate(path, false);
    syncInternalLinks();
  });
}

function syncInternalLinks() {
  const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]');

  links.forEach((link) => {
    link.href = withBasePath(link.getAttribute('href') || '/');
  });
}

initApp();

// Export router for global access
(window as any).router = router;
