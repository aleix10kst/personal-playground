import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PublicAngularComponentsModule } from '@personal-playground/public-angular/components';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [
    CommonModule,
    PublicAngularComponentsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class PublicAngularFeatureHomeModule {}
