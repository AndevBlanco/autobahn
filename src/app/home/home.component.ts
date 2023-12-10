import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule, CdkAccordionModule, HttpClientModule],
  providers: [DataService]
})
export class HomeComponent implements OnInit {
  items = [
    'Liste der verfügbaren Autobahnen zurück.',
    'Liste der aktuellen Baustellen zu einer Autobahn zurück.',
    'Liste der Webcams zu einer Autobahn zurück.',
    'Liste der Rastplätze zu einer Autobahn zurück.',
    'Liste der Verkehrsmeldungen zu einer Autobahn zurück.',
    'Liste der Sperrungen zu einer Autobahn zurück.',
    'Liste der Ladestationen zu einer Autobahn zurück.'
  ];
  roads: any = [];

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getAllLists();
  }

  async getAllLists() {
    await this.dataService.getAllRoads().subscribe((result: any) => {
      console.log(result.roads)
      this.roads = result.roads;
    });
  }
}

