
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Weather } from "../services/weather.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  API_KEY = 'a8f2a6d48d0be78d05902f4228fd9a05';
  API_URL =  "https://api.openweathermap.org/data/2.5/find?lat=0.0236&lon=37.9062&cnt=24&appid=" + this.API_KEY;

  constructor(private httpClient: HttpClient) { }

  get():Observable<Weather[]>{
    return this.httpClient.get<Weather[]>(this.API_URL);
  }
}
