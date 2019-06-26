import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from '../layout/page/page.component';
import { HomeComponent } from '../pages/home/home.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { TestComponent } from '../pages/test/test.component';
import { Routes as AppRoutes } from './routes.enum';

const pages: Routes = [
  {path: '', component: HomeComponent},
  {path: AppRoutes.TEST, component: TestComponent},
  {path: '**', component: NotFoundComponent}
];

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: AppRoutes.HOME},
  {path: '', component: PageComponent, children: pages}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
