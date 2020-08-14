import { Component, OnInit } from '@angular/core';
import { Weather } from "../../services/weather.model";
import { WeatherService } from "../../services/weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
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
    })
  }

}
