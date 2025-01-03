import { Router, type Request, type Response } from 'express';
const router = Router();

// import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', async (req: Request, res: Response) => {
  // TODO: GET weather data from city name
  const weather = await WeatherService.getWeatherForCity(req.body.cityName)
  console.log(weather);
  res.status(200).json(weather)
  // TODO: save city to search history
});

// TODO: GET search history
router.get('/history', async (_req: Request, res: Response) => {
  try {
    // Code here
    res.status(200).json("Get history PLACEHOLDER");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (_req: Request, res: Response) => {
  try {
    // Code here
    res.status(200).json("Delete history PLACEHOLDER");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default router;
