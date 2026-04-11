// Main entry point for Vite
import '../style.scss';
import './components/header/header.ts';
import './components/footer/footer.ts';
import { Router, routes } from './router/router.ts';

const router = new Router(routes);
const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

function withoutBasePath(path: string): string {
  if (!basePath) return path || '/';
  if (path === `${basePath}/` || path === basePath) return '/';
  if (path.startsWith(`${basePath}/`)) {
    return path.slice(basePath.length) || '/';
  }
  return path || '/';
}

async function initApp() {
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  const layout = await fetch(new URL('./layout.html', import.meta.url)).then(
    (res) => res.text(),
  );

  appContainer.innerHTML = layout;

  // Setup navigation intercept for links
  setupNavigation();

  // Load the current URL path
  const currentPath = withoutBasePath(window.location.pathname || '/');
  await router.navigate(currentPath);
}

function setupNavigation() {
  // Handle link clicks
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[href]') as HTMLAnchorElement;

    if (link && link.href.startsWith(window.location.origin)) {
      e.preventDefault();
      const path = withoutBasePath(link.pathname);
      router.navigate(path);
    }
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', (e) => {
    const path = e.state?.path || '/';
    router.navigate(path, false);
  });
}

initApp();

// Export router for global access
(window as any).router = router;
