import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BizmatModule } from 'bizmat';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { BizmatDocsLoginComponent } from './components/bizmat-docs-login/bizmat-docs-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BizmatDocsTravelComponent } from './components/bizmat-docs-travel/bizmat-docs-travel.component';

@NgModule({
  declarations: [
    AppComponent,
    BizmatDocsLoginComponent,
    HomeComponent,
    BizmatDocsTravelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    BizmatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
