import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CardsSectionComponent } from './cards-section/cards-section.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ProfileModule } from 'src/app/shared/components/profile/profile.module';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    CardsSectionComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule,
    ProfileModule,
    NavbarModule,
  ],
})
export class HomeModule {}
