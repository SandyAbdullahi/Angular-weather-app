
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Weather } from "../services/weather.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  get():Observable<Weather[]>{
    return this.httpClient.get<Weather[]>(environment.apiUrl);
  }
}
