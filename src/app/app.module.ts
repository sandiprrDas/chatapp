import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { appRoutes } from './routes';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { HttpClientModule } from '@angular/common/http';
import { Http,HttpModule } from '@angular/http';

import { ExampleComponent } from './example.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ChartFromComponent } from './chart-from/chart-from.component';
import { ChartroomComponent } from './chartroom/chartroom.component';
import { FeedComponent } from './feed/feed.component';
import { MessageComponent } from './message/message.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { ChartService } from './services/chart.service';
import { AuthService } from './services/auth.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ProductListComponent,
    ProductDetailsComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    LoginComponent,
    LogoutComponent,
    ChartFromComponent,
    ChartroomComponent,
    FeedComponent,
    MessageComponent,
    LoginFormComponent,
    SignupFormComponent,
    NavbarComponent,
    UserListComponent,
    UserItemComponent,  
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,HttpModule,
    RouterModule,RouterModule.forRoot(appRoutes),
    AngularFireModule,AngularFireDatabaseModule,AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [AuthService,ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
