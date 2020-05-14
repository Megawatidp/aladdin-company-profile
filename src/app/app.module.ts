import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { KarirComponent } from './pages/karir/karir.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { P404Component } from './error/p404/p404.component';
import { P500Component } from './error/p500/p500.component';
import { AgmCoreModule } from '@agm/core';
import { NetworkComponent } from './pages/services/network/network.component';
import { MainframeUnixComponent } from './pages/services/mainframe-unix/mainframe-unix.component';
import { ApplicationProdComponent } from './pages/services/application-prod/application-prod.component';
import { ItSecurityComponent } from './pages/services/it-security/it-security.component';
import { DataCenterComponent } from './pages/services/data-center/data-center.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    AboutComponent,
    ProductsComponent,
    KarirComponent,
    ContactComponent,
    BlogComponent,
    P404Component,
    P500Component,
    NetworkComponent,
    MainframeUnixComponent,
    ApplicationProdComponent,
    ItSecurityComponent,
    DataCenterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBAdikLDplf7zsvH5FeuupuDzP6oo1-CMg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
