import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { EditAboutComponent } from './edit-about/edit-about.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ObservablesComponent } from './observables/observables.component';
import { PromisesComponent } from './promises/promises.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HeaderComponent,
    AboutComponent,
    EditAboutComponent,
    ProductsComponent,
    HomeComponent,
    ContactComponent,
    AdminComponent,
    AccessDeniedComponent,
    NotFoundComponent,
    ObservablesComponent,
    PromisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
