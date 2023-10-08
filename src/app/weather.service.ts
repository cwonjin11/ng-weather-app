import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiKey } from './server'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  
  constructor(private http:HttpClient) {}

  getWeather(city: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  }
}

