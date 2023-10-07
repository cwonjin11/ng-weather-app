import { WeatherService } from './../weather.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  city!: string;
  weatherData: any

  constructor(private WeatherService:WeatherService){}

  ngOnInit(){}

  getWeather(){
    this.WeatherService.getWeather(this.city)
    .subscribe(data => {
      this.weatherData = data
      console.log(data)
    })
  }
}
