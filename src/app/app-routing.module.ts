import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pages } from './pages';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  }, {
    path: 'signin',
    component: pages['signin']
  }, {
    path: 'signup',
    component: pages['signup']
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
