import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardViewComponent } from './components/card-view/card-view.component';
import { TableViewComponent } from './components/table-view/table-view.component';
import { HomeViewComponent } from './components/home-view/home-view.component';


const routes: Routes = [
{path:'',component:HomeViewComponent},
{path:'cards',component:CardViewComponent},
{path:'table',component:TableViewComponent},
{path:'home',component:HomeViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
