import {PLATFORM} from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: PLATFORM.moduleName('./welcome'),      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: PLATFORM.moduleName('./users'),        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: PLATFORM.moduleName('./child-router'), nav: true, title: 'Child Router' },
      // This is our added route, nothing special or different here
      { 
        route: 'react', 
        name: 'react-example', 
        moduleId: PLATFORM.moduleName('./react-example'), 
        nav: true, 
        title: 'React Example'
      }
    ]);

    this.router = router;
  }
}
