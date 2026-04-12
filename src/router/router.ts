export interface Route {
  path: string;
  name: string;
  component: string;
  ts?: string | null;
}

type RouteModule = {
  init?: () => void;
};

const routeScriptModules = import.meta.glob<RouteModule>('../pages/**/*.ts');
const appBasePath = normalizeBasePath(import.meta.env.BASE_URL);

function normalizeBasePath(basePath: string): string {
  if (!basePath || basePath === '/') {
    return '';
  }

  return basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
}

export function getAppPath(pathname: string): string {
  if (!pathname) {
    return '/';
  }

  if (!appBasePath) {
    return pathname;
  }

  if (pathname === appBasePath) {
    return '/';
  }

  if (pathname.startsWith(`${appBasePath}/`)) {
    return pathname.slice(appBasePath.length) || '/';
  }

  return pathname;
}

export function withBasePath(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (!appBasePath) {
    return normalizedPath;
  }

  return normalizedPath === '/'
    ? `${appBasePath}/`
    : `${appBasePath}${normalizedPath}`;
}

export const routes: Route[] = [
  {
    path: '/',
    name: 'Accueil',
    component: '../pages/home.html',
  },
  {
    path: '/produits',
    name: 'Produits',
    component: '../pages/products/products.html',
    ts: '../pages/products/products.ts',
  },
  {
    path: '/produits-avec-cookies',
    name: 'Produits avec les cookies',
    component: '../pages/products-cookies/products-cookies.html',
    ts: '../pages/products-cookies/products-cookies.ts',
  },
  {
    path: '/finaliser-votre-commande',
    name: 'Finaliser votre commande',
    component: '../pages/checkout/checkout.html',
    ts: '../pages/checkout/checkout.ts',
  },
  {
    path: '/ressources',
    name: 'Ressources',
    component: '../pages/ressources.html',
  },
  {
    path: '/a-propos',
    name: 'A propos',
    component: '../pages/about/about.html',
    ts: '../pages/about/about.ts',
  },
];

const titlePage = `Mob & Accessibilité`;

export class Router {
  private routes: Route[];
  private currentPath: string = '/';

  constructor(routes: Route[]) {
    this.routes = routes;
  }

  async navigate(path: string, updateHistory: boolean = true): Promise<void> {
    const appPath = getAppPath(path);
    const route = this.routes.find((r) => r.path === appPath);

    if (!route) {
      console.warn(`Route not found: ${appPath}`);
      return;
    }

    this.currentPath = appPath;
    await this.loadComponent(route.component);

    // Load route-specific TypeScript if provided
    if (route.ts) {
      await this.loadScript(route.ts);
    }

    if (updateHistory) {
      history.pushState({ path: appPath }, route.name, withBasePath(appPath));
    }

    // Set title
    document.title = `${route.name} - ${titlePage}`;
  }

  private async loadScript(scriptPath: string): Promise<void> {
    try {
      const loadModule = routeScriptModules[scriptPath];

      if (!loadModule) {
        console.error(`Script not found: ${scriptPath}`);
        return;
      }

      const module = await loadModule();
      // Call init function if it exists
      if (module.init && typeof module.init === 'function') {
        module.init();
      }
    } catch (error) {
      console.error(`Failed to load script: ${scriptPath}`, error);
    }
  }

  private async loadComponent(componentPath: string) {
    const outlet = document.querySelector('router-outlet');
    if (!outlet) {
      console.error('router-outlet not found');
      return;
    }

    try {
      const html = await fetch(new URL(componentPath, import.meta.url)).then(
        (res) => res.text(),
      );
      outlet.innerHTML = html;
    } catch (error) {
      console.error(`Failed to load component: ${componentPath}`, error);
    }
  }

  getCurrentPath(): string {
    return this.currentPath;
  }
}
