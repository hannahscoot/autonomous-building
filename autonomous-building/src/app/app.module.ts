import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

import { SecurityService } from './services/Security.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LandingPageComponent},
      { path: 'login', component: LoginPageComponent},
      //Add new paths here, below wildcard path must be the last path
      { path: '**', redirectTo: '', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
