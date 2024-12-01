import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './edit-about/edit-about.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './services/auth.guard';
import { roleGuard } from './services/role.guard';
import { notCompleteGuard } from './services/not-complete.guard';
import { PromisesComponent } from './promises/promises.component';
import { ObservablesComponent } from './observables/observables.component';

const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: 'home', component: HomeComponent},
  // {
  //   path: 'about',
  //   component: AboutComponent,
  //   canActivateChild: [ roleGuard],
  //   children: [{path: 'edit', component: EditAboutComponent}]
  // },
  // {
  //   path: 'products', component: ProductsComponent
  // },
  // {path: 'contact', component: ContactComponent, canDeactivate:[notCompleteGuard]},
  // {path: 'admin', component: AdminComponent, canActivate: [authGuard]},
  // {
  //   path: 'offers',
  //   loadChildren: () => import('./offers/offers.module').then((m) => m.OffersModule)
  // },
  // {
  //   path: 'access-denied', component: AccessDeniedComponent
  // },
  // {
  //   path: '**', component: NotFoundComponent
  // }
  {
    path: "promises", component: PromisesComponent
  },
  {
    path: "observables", component: ObservablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
