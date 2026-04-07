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

  async navigate(path: string): Promise<void> {
    const route = this.routes.find((r) => r.path === path);

    if (!route) {
      console.warn(`Route not found: ${path}`);
      return;
    }

    this.currentPath = path;
    await this.loadComponent(route.component);

    // Load route-specific TypeScript if provided
    if (route.ts) {
      await this.loadScript(route.ts);
    }

    // Update browser history
    history.pushState({ path }, route.name, path);

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
