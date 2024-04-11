import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { WeatherApiResponse } from './models/WeatherApiResponse.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  temperature!: number;
  humidity!: number;
  isDay!: number;
  precipitation!: number;
  weatherCode!: number;
  windSpeed!: number;
  latitude!: number;
  longitude!: number;

  constructor(private service: AppService) { }

  getWeather() {
    this.service.getWeather(this.latitude, this.longitude).subscribe((data: WeatherApiResponse) => {
      this.temperature = data.current.temperature_2m;
      this.humidity = data.current.relative_humidity_2m;
      this.isDay = data.current.is_day;
      this.precipitation = data.current.precipitation;
      this.weatherCode = data.current.weather_code;
      this.windSpeed = data.current.wind_speed_10m;
    });
  }
}
