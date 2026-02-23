export interface Route {
  path: string;
  name: string;
  component: string;
}

export const routes: Route[] = [
  {
    path: '/',
    name: 'Accueil',
    component: '../pages/accueil.html',
  },
  {
    path: '/atelier',
    name: 'Atelier',
    component: '../pages/atelier.html',
  },
  {
    path: '/ressources',
    name: 'Ressources',
    component: '../pages/ressources.html',
  },
  {
    path: '/a-propos',
    name: 'A propos',
    component: '../pages/about.html',
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

    // Update browser history
    history.pushState({ path }, route.name, path);

    // Set title
    document.title = `${route.name} - ${titlePage}`;
  }

  private async loadComponent(componentPath: string) {
    const outlet = document.querySelector('router-outlet');
    if (!outlet) {
      console.error('router-outlet not found');
      return;
    }

    try {
      const html = await fetch(new URL(componentPath, import.meta.url)).then(
        (res) => res.text()
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
