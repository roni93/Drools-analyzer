import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DroolsMenuComponent } from './drools-menu/drools-menu.component';
import { TextComponent } from './text/text.component';
import { DroolsListComponent } from './drools-list/drools-list.component';
const routes: Routes = [
 {
    path: 'menu',
    component: DroolsMenuComponent
  },
  {
    path: 'menu/list',
    component: DroolsListComponent
  },

  {
    path : '',
    component: TextComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
