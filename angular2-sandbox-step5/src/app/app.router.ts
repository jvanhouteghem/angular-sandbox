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