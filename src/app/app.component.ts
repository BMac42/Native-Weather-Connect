import { CommonModule } from '@angular/common';
import { Component, OnInit, NgModule, DoCheck, Input } from '@angular/core';
import { ApiService } from '@src/app/services/api.service';
import { Weather } from '@src/app/interfaces/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-connect';
  posit: any;
  lat = false;
  lng = false;
  weatherResponse: any;
  cityResponse: any;
  formattedCity: string;
  weather: Weather;
  weatherIcon: any;

  constructor(private apiService: ApiService) { }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    console.log('init test here');
    /* grab coordinates from users location */
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => this.posit = position);
    }
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngDoCheck() {
    /* if coords are pulled */
    if (this.posit) {
      this.getLocationInfo(this.posit);
      console.log('coords check true log');
    }
  }

  getLocationInfo(position) {
    /* if statement to prevent infinite loop */
    if (this.lat === false){
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
    }
  }


}


