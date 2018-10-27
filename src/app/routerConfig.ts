import {Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


export const appRoutes: Routes = [
    { path: 'home', 
      component: HomeComponent 
    },
    {
      path: 'about',
      component: AboutComponent
    },
    { path: 'dashboard',
      component: DashboardComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'logout',
        component:LogoutComponent
    }
  ];