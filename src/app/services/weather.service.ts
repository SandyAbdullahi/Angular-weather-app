
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Weather } from "../services/weather.model";


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {

  }






  API_KEY = 'a8f2a6d48d0be78d05902f4228fd9a05';
  API_URL =  `https://api.openweathermap.org/data/2.5/find?lat=-1.2724254&lon=36.7927116&&units=metric&cnt=24&appid=${this.API_KEY}`;


  get():Observable<Weather[]>{
    return this.httpClient.get<Weather[]>(this.API_URL);
  }
}
