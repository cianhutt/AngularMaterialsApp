import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PiitrackingComponent } from './piitracking/piitracking.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent,
    children: [
      {path: '', component: PiitrackingComponent},
      {path: 'login', component: LoginComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
