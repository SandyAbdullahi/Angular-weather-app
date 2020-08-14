import { animate, style, transition, trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Weather } from "../../services/weather.model";
import { WeatherService } from "../../services/weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass'],
  animations: [
    trigger('it',[
      transition('void => *',[
        style({

          opacity: 0,
        }),
        animate('0.2s ease-in',
        style({

          opacity: 1
        }))
      ])
    ]
    )
  ]
})
export class WeatherComponent implements OnInit {

  current_climate: Weather[];
  climate_info: Weather[];


  constructor(private weatherSvc: WeatherService) { }

  ngOnInit() {
    this.loadWeather();

  }

  loadWeather():void{
    this.weatherSvc.get().subscribe(data => {
      this.current_climate = data['list'].flatMap(i => i);
      console.log(this.current_climate);
    })
  }

}
