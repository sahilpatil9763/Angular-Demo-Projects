import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchesComponent } from './batches/batches.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { InvalidComponent } from './invalid/invalid.component';

const routes: Routes = [
  {path:'batches',component:BatchesComponent},    //Redering Batches Component
  {path:'aboutus',component:AboutusComponent},    //Redering AboutUS Component
  {path:'subjects',component:SubjectsComponent},  //Redering Subjects Component
  {path:'',component:AboutusComponent},           //This is Default route
  {path:'**',component:InvalidComponent}          //This is Wild card route this should declared be at the end 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
