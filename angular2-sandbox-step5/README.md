# Angular2SandboxStep5

###Initialize

We restart from zero :
- Create new project ng new angular2-sandbox-step5 (then ng-serve)
- Create new folder in app/components/
- cd ...
- ng g component component1
- add <app-component1></app-component1> in app.component.html

Do it again to create component2

NB : angular CLI use relative path, if you use this command in root folder you will create service1 in app.

###Routing

A. Update app.component.html to remove <app-component1></...> and <app-component2></...> : 

```
<h1>
  {{title}}
</h1>

<ul class="nav navbar-nav">
  <li>
    <a routerLink="component1">Component1</a>
  </li>
  <li>
    <a routerLink="component2">Component2</a>
  </li>
</ul>

<router-outlet></router-outlet> 
```

B. Create app/app.router.ts

```typescript
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';

export const router: Routes = [
    { path: '', redirectTo: 'component1', pathMatch: 'full' },
    { path: 'component1', component: Component1Component },
    { path: 'component2', component: Component2Component }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
```

C. Update app.module.ts

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';

import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

See : 
- history.pushState (https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries)
and (https://angular.io/docs/ts/latest/guide/router.html#!#base-href)
- https://coursetro.com/posts/code/19/Angular-2-Router-&-Navigation-Tutorial
