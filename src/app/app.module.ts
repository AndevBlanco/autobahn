import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapModule } from './map/map.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [MapModule],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AppModule { }
