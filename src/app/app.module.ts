import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapModule } from './map/map.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [MapModule, HomeModule],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService]
})
export class AppModule { }
