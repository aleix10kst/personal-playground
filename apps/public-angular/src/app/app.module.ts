import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ROUTES } from './app.constants';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: ROUTES.HOME,
    loadChildren: () =>
      import('@personal-playground/public-angular/feature-home').then(
        (m) => m.PublicAngularFeatureHomeModule
      ),
  },
  {
    path: ROUTES.POKEMONS,
    loadChildren: () =>
      import('@personal-playground/public-angular/feature-pokemons').then(
        (m) => m.PublicAngularFeaturePokemonsModule
      ),
  },
  {
    path: ROUTES.LANDING,
    pathMatch: 'full',
    redirectTo: ROUTES.HOME,
  },
];

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
