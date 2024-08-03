import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'about' , component:AboutComponent},
    {path:'portfolio' , component:PortfolioComponent},
    {path:'contact' , component:ContactComponent},
    {path:'gallery' , component:GalleryComponent},
    {path:'**' , component:NotFoundComponent}
];
