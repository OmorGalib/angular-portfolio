import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CardsSectionComponent } from './cards-section/cards-section.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { WorkModule } from 'src/app/shared/components/work/work.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    CardsSectionComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarModule,
    WorkModule
  ],
})
export class HomeModule {}
