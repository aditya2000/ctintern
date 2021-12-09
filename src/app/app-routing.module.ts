import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToppersComponent } from './toppers/toppers.component';
import { UsersComponent } from './users/users.component';
import { WinnersComponent } from './winners/winners.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'winners', component: WinnersComponent},
  {path: 'toppers', component: ToppersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UsersComponent, WinnersComponent, ToppersComponent]