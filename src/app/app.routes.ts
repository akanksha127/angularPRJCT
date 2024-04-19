import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AngularRoutingComponent } from './angular-routing/angular-routing.component';

export const routes: Routes = [
  //  { 'path': '', 'title': 'Home', component:HomeComponent},
    { 'path': 'about', 'title': 'About', component:AboutComponent},
    { 'path': 'contact' , 'title': 'Contact', component:ContactComponent},
    { 'path': 'routing', 'title': 'Routing', component:AngularRoutingComponent},

  //  { 'path': '', redirectTo: '/home', pathMatch: 'full'},
  //  { 'path': '**' ,  component:PageNotFoundComponent}

];
