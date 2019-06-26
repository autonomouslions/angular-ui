import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { RoutingModule } from '../routing/routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageComponent } from './page/page.component';

const COMPONENTS = [
  FooterComponent,
  HeaderComponent,
  NavigationComponent,
  PageComponent
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RoutingModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class LayoutModule {
}
