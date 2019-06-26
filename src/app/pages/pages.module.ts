import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';

const COMPONENTS = [
  HomeComponent,
  NotFoundComponent,
  TestComponent
];

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class PagesModule {
}
