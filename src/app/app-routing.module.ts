import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonlistComponent } from './personlist/personlist.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'persons', component: PersonlistComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
