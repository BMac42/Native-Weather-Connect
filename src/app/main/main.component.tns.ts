import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SkyconsService } from '@src/app/services/skycons.service';
import { ApiService } from '@src/app/services/api.service';
import { compileNgModule } from '@angular/compiler';
import { Weather } from '@src/app/interfaces/weather';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('expandShrink', [
    state('expand', style({
      height: '800px',
      width: '90%',
    })),
    // state('shrink', style({
    //   height: '500px',
    //   width: '65%',
    // })),
    state('expandFlip', style({
      transform: 'rotate(180deg)',
    })),
    state('shrinkFlip', style({
      transform: 'rotate(0deg)'
    })),
    transition('expand => shrink', animate(300)),
    transition('shrink => expand', animate(300)),
    transition('expandFlip => shrinkFlip', animate(300)),
    transition('shrinkFlip => expandFlip', animate(1000)),
    ]),
  ]
})

export class MainComponent implements OnInit{
  @Input() finalLat: any;
  @Input() finalLng: any;
  @Input() city: string;
  showToday = true;
  weather: Weather;
  weatherIcon: string;
  currentTemp: any;
  currentDate: any;
  currentSummary = '';
  expand = false;
  getId = '#sky';

  constructor(private skycons: SkyconsService, private apiService: ApiService) { }

  ngOnInit() {
    this.currentDate = new Date;

    this.apiService.getWeather(this.finalLat, this.finalLng)
    .subscribe((res) => {
      console.log(res);
    });
  }

  // isExpand() {
  // this.expand = !this.expand;
  // this.showToday = !this.showToday;
  // }
}
