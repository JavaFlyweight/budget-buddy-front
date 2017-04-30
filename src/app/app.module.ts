import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app.routing';

@NgModule({

    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        RouterModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        DashboardComponent,
        HeaderComponent
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
