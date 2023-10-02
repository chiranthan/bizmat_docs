import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BizmatDocsLoginComponent } from './components/bizmat-docs-login/bizmat-docs-login.component';
import { BizmatDocsPersonalComponent } from './components/bizmat-docs-personal/bizmat-docs-personal.component';
import { BizmatDocsTravelComponent } from './components/bizmat-docs-travel/bizmat-docs-travel.component';
import { HomeComponent } from './components/home/home.component';
import { BizmatDocsRentalComponent } from './components/bizmat-docs-rental/bizmat-docs-rental.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: BizmatDocsLoginComponent },
  { path: 'personal', component:  BizmatDocsPersonalComponent},
  { path: 'travel', component:  BizmatDocsTravelComponent},
  { path: 'rental', component:  BizmatDocsRentalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
