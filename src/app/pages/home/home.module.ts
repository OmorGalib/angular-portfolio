import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CardsSectionComponent } from './cards-section/cards-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    CardsSectionComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
