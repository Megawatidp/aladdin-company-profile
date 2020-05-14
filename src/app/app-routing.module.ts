import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { KarirComponent } from './pages/karir/karir.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { P404Component } from './error/p404/p404.component';
import { ProductsComponent } from './pages/products/products.component';
import { NetworkComponent } from './pages/services/network/network.component';
import { MainframeUnixComponent } from './pages/services/mainframe-unix/mainframe-unix.component';
import { ApplicationProdComponent } from './pages/services/application-prod/application-prod.component';
import { ItSecurityComponent } from './pages/services/it-security/it-security.component';
import { DataCenterComponent } from './pages/services/data-center/data-center.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About Page'
    }
  },
  {
    path: 'network-product',
    component: NetworkComponent,
    data: {
      title: 'Network & Product Page'
    }
  },
  {
    path: 'mainframe-unix',
    component: MainframeUnixComponent,
    data: {
      title: 'Mainframe And Unix Page'
    }
  },
  {
    path: 'application-product',
    component: ApplicationProdComponent,
    data: {
      title: 'Application Product Page'
    }
  },
  {
    path: 'it-security',
    component: ItSecurityComponent,
    data: {
      title: 'IT Security Page'
    }
  },
  {
    path: 'data-center',
    component: DataCenterComponent,
    data: {
      title: 'Data Center Page'
    }
  },
  {
    path: 'karir',
    component: KarirComponent,
    data: {
      title: 'Karir Page'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Contact Page'
    }
  },
  
  {
    path: 'products',
    component: ProductsComponent,
    data: {
      title: 'Products Page'
    }
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  { 
    path: '**', 
    redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
