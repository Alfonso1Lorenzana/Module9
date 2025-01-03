import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  lat: number;
   lon: number;
 }

// TODO: Define a class for the Weather object
class Weather {
   city: string;
      date: string;
  temp: string;
   humidity: string;
   windSpeed: string;

  constructor(city: string, date: string, temp: string, humidity: string, windSpeed: string) {
    this.city = city;
     this.date = date;
     this.temp = temp;
     this.humidity = humidity;
     this.windSpeed = windSpeed;
   }
 }

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  baseURL: string;
  apiKey: string;
  cityName: string; 

  constructor(baseURL: string, apiKey: string, cityName: string) {
    this.baseURL = baseURL;
    this.apiKey = apiKey;
    this.cityName = cityName;
  }
  
  // TODO: Create fetchLocationData method
 private async fetchLocationData(query: string) {
  //fetch (query) TouchEvent.

 }
  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: Coordinates): Coordinates {

  }
  // TODO: Create buildGeocodeQuery method
   private buildGeocodeQuery(): string {
    return `${this.baseURL}/geo/1.0/direct?q=${this.cityName}&appid=${this.apiKey}`
   }
  // TODO: Create buildWeatherQuery method
  private buildWeatherQuery(coordinates: Coordinates): string {
    return `api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${this.apiKey}`

  }
  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData() {

  }
  // TODO: Create fetchWeatherData method
  private async fetchWeatherData(coordinates: Coordinates) {

  }
  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any) {


  }

  // TODO: Complete buildForecastArray method
  private buildForecastArray(currentWeather: Weather, weatherData: any[]) {

  }
  // TODO: Complete getWeatherForCity method
   async getWeatherForCity(city: string) {
    this.cityName = city;
    const coordinates = this.buildGeocodeQuery()
    console.log(coordinates);
   }
}

let baseUrl = process.env.API_BASE_URL || "";
let apiKey = process.env.API_KEY || "";
let cityName = "seattle";
export default new WeatherService(baseUrl, apiKey, cityName);
