import { Component, OnInit } from '@angular/core';
import { Weather } from '@src/app/interfaces/weather';
import { ApiService } from '@src/app/services/api.service';
import { Accuracy } from 'tns-core-modules/ui/enums';
import { isEnabled, getCurrentLocation } from 'nativescript-geolocation';
import * as Geolocation from 'nativescript-geolocation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-connect';
  // posit: any;
  lat = 0;
  lng = 0;
  // weatherResponse: any;
  // cityResponse: any;
  // formattedCity: string;
  // weather: Weather;
  // weatherIcon: any;
  watchId = '';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    /* grab users location */
    this.getDeviceLocation();
    }

      getDeviceLocation(): Promise<any> {
        return new Promise((resolve, reject) => {
            Geolocation.enableLocationRequest().then(() => {
                Geolocation.getCurrentLocation({timeout: 10000}).then(location => {
                    resolve(location);
                    this.lat = location.latitude;
                    this.lng = location.longitude;
                    console.log('LAT HERE ' , this.lat);
                    console.log('LNG HERE ' , this.lng);
                }).catch(error => {
                    reject(error);
                });
            });
        });
    }

      updateLocation() {
        this.getDeviceLocation().then(result => {
            this.lat = result.latitude;
            this.lng = result.longitude;
        }, error => {
            console.error(error);
        });
    }


  }

  // locationCheck() {
  //   geolocation.getCurrentLocation({desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 10000})
  //   .then((loc) => {
  //       if (loc) {
  //         console.log('TEST HERE' , loc.latitude);
  //         console.log('TEST HERE ' , loc.longitude);
  //         this.lat = loc.latitude;
  //         this.lng = loc.longitude;
  //       } else {
  //         console.log('no location data');
  //       }
  //   });
  // }
