import { Component } from '@angular/core';
import { Routes } from '../../routing/routes.enum';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html'
})
export class NavigationComponent {
  pages: { route: string, name: string }[] = [
    {route: Routes.TEST, name: 'Test page'}
  ];
}
