import { Component } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  map: any;

  ngOnInit(): void {
    this.map = L.map("map").setView([46.879966, -121.726909], 7);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  initializeMap(): void {
    
  }
}
